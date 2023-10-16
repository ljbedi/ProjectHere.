import React from 'react';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const GooglePlacesInput = () => {

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

        // Gets the lat/lng
        console.log(details.geometry.location)
      }}
      fetchDetails={true}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_CLOUD_API_KEY,
        language: 'en',
        type: "establishment",
        components: 'country:uk'
      }}
    />
  );
};
export default GooglePlacesInput;