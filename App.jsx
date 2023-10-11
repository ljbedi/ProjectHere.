import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomMapView from './components/mapComponent';
import GooglePlacesInput from './components/Search';
import UserProfile from './components/UserProfile';
import UserContainer from './containers/userContainer';

export default function App() {

  return (
    <>
      <CustomMapView/>
      <GooglePlacesInput/>
      <UserContainer />
      </>
  );
}

