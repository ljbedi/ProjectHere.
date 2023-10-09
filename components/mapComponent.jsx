import React from 'react';
import MapView from 'react-native-maps';

const CustomMapView = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 55.9533,
        longitude: -3.1883,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default CustomMapView;

