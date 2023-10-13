import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import DestinationScreen from './screens/DestinationScreen';
import MapScreen from './screens/MapScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import CityProfile from './screens/CityProfile';
import CityList from './components/CityList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Here.'}}/>
      <Stack.Screen name="Destinations" component={DestinationScreen} options={{ title: 'Destinations'}}/>
      <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Map'}}/>
      <Stack.Screen name="User Profile" component={UserProfileScreen} options={{ title: 'User Profile'}}/>
      <Stack.Screen name="City Profile" component={CityProfile} options={{ title: 'City Profile'}}/> 
      <Stack.Screen name="City List" component={CityList} options={{ title: 'City List'}}/> 
      </Stack.Navigator>
      </NavigationContainer>
      </>
  );
}

