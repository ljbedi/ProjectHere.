import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import DestinationScreen from './components/DestinationScreen';
import MapScreen from './components/MapScreen';
import UserProfileScreen from './components/UserProfileScreen';
import CityProfile from './components/CityProfile';
import CityList from './components/CityList';
import CheckInList from './components/CheckInList';
import React, { useState, useEffect } from 'react';
import MyTabs from './components/MainTabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
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

  return (
    <>
    <NavigationContainer>
    {/* <Stack.Navigator initialRouteName="Home"> */}
      <MyTabs/>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Here.'}}/>
      <Stack.Screen name="Destinations" component={DestinationScreen} options={{ title: 'Destinations'}}/>
      <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Map'}}/>
      <Stack.Screen name="User Profile" component={UserProfileScreen} options={{ title: 'User Profile'}}/>
      <Stack.Screen name="City Profile" component={CityProfile} options={{ title: 'City Profile'}}/> 
      <Stack.Screen name="City List" component={CityList} options={{ title: 'City List'}}/> 
      <Stack.Screen name="Checked-In List" component={CheckInList} options={{ title: 'Checked-In List'}}/> 

      {/* </Stack.Navigator> */}
      </NavigationContainer>
      </>
  );
}

