import { StyleSheet, Text, View } from 'react-native';
import CustomMapView from './components/mapComponent';
import GooglePlacesInput from './components/search';
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

