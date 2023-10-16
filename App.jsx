// import { StyleSheet, Text, View } from 'react-native';
// import CustomMapView from './components/MapComponent';
// import GooglePlacesInput from './components/Search';
// import UserContainer from './containers/UserContainer';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import DestinationScreen from './components/DestinationScreen';
import MapScreen from './components/MapScreen';
import UserProfileScreen from './components/UserProfileScreen';
import CityProfile from './components/CityProfile';
import CityList from './components/CityList';
import MyTabs from './components/MainTabNavigator';
import CheckInList from './components/CheckInList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CheckedInContainer from "./containers/CheckedInContainer";

const Stack = createNativeStackNavigator();


const Root = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Destinations" component={DestinationScreen} />
      {/* <Tab.Screen name="City Profile" component={CityProfile} /> */}
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="User Profile" component={UserProfileScreen} />
    </Tab.Navigator>
    )
}

const App = () => {

  return (
    <>
    <NavigationContainer>
      {/* {!user.loggedIn ? <Stack.Navigator>// Stack.Screen - LoginScreen</Stack.Navigator> : } */}
      <Stack.Navigator initialRouteName="Home">
        {/* Tabs */}
        <Stack.Screen name="Root" component={Root} />

        {/* Other Screens */}
        <Stack.Screen name="Checked-In List" component={CheckedInContainer} options={{ title: 'Checked-In List'}}/> 
        <Stack.Screen name="City Profile" component={CityProfile}/> 

      </Stack.Navigator>
      </NavigationContainer>
      </>
  );
}

export default App;

