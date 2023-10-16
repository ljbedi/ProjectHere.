import React, {useState} from 'react';
import { Button, View, Text , MapView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustomMapView from './MapComponent';
import GooglePlacesInput from './Search';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import CheckIn from './CheckIn';


function MapScreen( {navigation} ) {

  const [currentLocation, setCurrentLocation] = useState({
    lat: 55.9533,
    lng: -3.1883
  })

  return (
    <>
    {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Map Screen</Text>
      <Button
        title="Go to Destinations"
        onPress={() => navigation.navigate('Destinations')}></Button>
    </View> */}
    <>
    <GooglePlacesInput setCurrentLocation={setCurrentLocation} />
    <CustomMapView currentLocation={currentLocation}/>
    <CheckIn checkIn={CheckIn}/>
    </>
    </>
  );
}

export default MapScreen;


