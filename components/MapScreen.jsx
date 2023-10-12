import * as React from 'react';
import { Button, View, Text , MapView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustomMapView from './mapComponent';
import GooglePlacesInput from './Search';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';

function MapScreen( {navigation} ) {
  return (
    <>
    {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Map Screen</Text>
      <Button
        title="Go to Destinations"
        onPress={() => navigation.navigate('Destinations')}></Button>
    </View> */}
    <>
    <GooglePlacesInput />
    <CustomMapView/>
    </>
    </>
  );
}

export default MapScreen;


