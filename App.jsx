import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import DestinationScreen from './screens/DestinationScreen';
import MapScreen from './screens/MapScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import CityProfile from './components/CityProfile';
import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CheckedInContainer from "./containers/CheckedInContainer";
import EstablishmentScreen from './screens/EstablishmentScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  // console.log(location)

const Root = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Destinations" component={DestinationScreen} />
      {/* <Tab.Screen name="City Profile" component={CityProfile} /> */}
      <Tab.Screen name="Map" component={MapScreen} initialParams={{location}} />
      <Tab.Screen name="User Profile" component={UserProfileScreen}/>
    </Tab.Navigator>
    )
}





  return (
    <>
    <NavigationContainer>
      {/* {!user.loggedIn ? <Stack.Navigator>// Stack.Screen - LoginScreen</Stack.Navigator> : } */}
      <Stack.Navigator initialRouteName="here.">
        {/* Tabs */}
        <Stack.Screen name="here." component={Root} />

        {/* Other Screens */}
        <Stack.Screen name="City Profile" component={CityProfile}/> 
        <Stack.Screen name="Establishment" component={EstablishmentScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
      </>
  );
}

export default App;

