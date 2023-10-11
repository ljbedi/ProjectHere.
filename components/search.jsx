import React from 'react';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {

  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyDlDVEZC0leV8dVUGSfwJPh4GBMh-ooAvg',
        language: 'en',
        type: "establishment",
      }}
    />
  );
};

export default GooglePlacesInput;