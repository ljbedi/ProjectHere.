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
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-ionicons';


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
        screenOptions={{
        tabBarStyle: { backgroundColor: '#325F62', height: 100, borderTopWidth: 2, borderTopColor: 'black' },
        tabBarLabelStyle: { fontSize: 16, color: 'white' },
        tabBarIndicatorStyle: { backgroundColor: 'white', height: 3 },
  }}
        initialRouteName="Map"
>
  <Tab.Screen
    name="Destinations"
    component={DestinationScreen}
    options={{
      tabBarIcon: ({ focused, color, size }) => (
        <Ionicons
          name={focused ? 'heart' : 'heart-outline'}
          size={size}
          color={color}
        />
      ),
    }}
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
