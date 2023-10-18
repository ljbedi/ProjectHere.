import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./screens/SplashScreen";
import DestinationScreen from './screens/DestinationScreen';
import MapScreen from './screens/MapScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import CityProfile from './components/CityProfile';
import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CheckedInContainer from "./containers/CheckedInContainer";
import EstablishmentScreen from './screens/EstablishmentScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons/faPlaneDeparture'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const Root = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if(route.name == "Destinations") {
              return <FontAwesomeIcon icon={faPlaneDeparture} size={30} color={"#FDF295"} />
            } else if (route.name == "Map") {
              return <FontAwesomeIcon icon={faLocationDot} size={50} color={"#FDF295"} />

            } else if (route.name == "User Profile") {
              return <FontAwesomeIcon icon={faUser} size={30} color={"#FDF295"} />

            }
            
          },
          
          tabBarStyle: { backgroundColor: '#325F62', borderTopWidth: 2, borderTopColor: 'black', paddingBottom: 0},
          // tabBarLabelStyle: { fontSize: 16, color: 'white' },
          // tabBarIndicatorStyle: { backgroundColor: 'white', height: 100 },
          tabBarShowLabel: false,
        })}
        
        initialRouteName="Map"
  
>
  <Tab.Screen
    name="Destinations"
    component={DestinationScreen}
  />
        <Tab.Screen name="Map" component={MapScreen} initialParams={{ location }} options={{ headerShown: false }}/>
        <Tab.Screen name="User Profile" component={UserProfileScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>
    );
  };
  
  
  
  return (
    <NavigationContainer>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator>
          {/* Tabs */}
          <Stack.Screen name="here." component={Root} />

          {/* Other Screens */}
          <Stack.Screen name="City Profile" component={CityProfile} />
          <Stack.Screen name="Establishment" component={EstablishmentScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
