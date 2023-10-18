import React from 'react';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const GooglePlacesInput = ({setCurrentLocation}) => {

  return (
    <GooglePlacesAutocomplete
      styles={{
        container:{
          position: 'absolute',
          backgroundColor: '#FFF',
          zIndex: 10,//Forcing it to front
          width: "100%"
      }
      }}
      placeholder='Search'
      onFail={err => console.log(err)}
      onPress={(data, details = null) => {
        setCurrentLocation(details.geometry.location)
        console.log(details)
        console.log("details", details.geometry.location)
      }}
      fetchDetails={true}
      // currentLocation={true}
      nearbyPlacesAPI='GooglePlacesSearch'
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_CLOUD_API_KEY,
        language: 'en',
        type: "(cities)",
        // components: 'country:uk'
      }}
    />
  );
};
export default GooglePlacesInput;