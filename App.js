import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomMapView from './components/mapComponent';
import GooglePlacesInput from './components/search';
import UserProfile from './components/userProfile';

export default function App() {

  return (
    <>
      <CustomMapView/>
      <GooglePlacesInput/>
      <UserProfile />
      </>
  );
}

