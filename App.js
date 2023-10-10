import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomMapView from './components/mapComponent';
import { PROVIDER_GOOGLE } from 'react-native-maps';

export default function App() {


  return (
    <>
      <CustomMapView/>
    </>
  );
}

