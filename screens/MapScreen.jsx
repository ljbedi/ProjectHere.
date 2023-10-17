import React, {useState} from 'react';
import { Button, View, Text , MapView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustomMapView from '../components/MapComponent';
import GooglePlacesInput from '../components/Search';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import CheckIn from '../components/CheckIn';


function MapScreen( {route} ) {

  const {location} = route.params

const [selectedEstablishment, setSelectedEstablishment] = useState(null)

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
    <CustomMapView currentLocation={currentLocation} setSelectedEstablishment={setSelectedEstablishment}/>
    <CheckIn selectedEstablishment={selectedEstablishment} CheckIn={CheckIn}/>
    </>
    </>
  );
}

export default MapScreen;


