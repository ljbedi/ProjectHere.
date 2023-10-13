import * as React from 'react';
import { Button, View, Text , MapView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustomMapView from '../components/MyMapView';
import GooglePlacesInput from '../components/MapInput';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import MapContainer from '../containers/MapContainer';

function MapScreen( {navigation} ) {
  return (
    <>
    <MapContainer/>
    </>
  );
}

export default MapScreen;


