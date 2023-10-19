import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustomMapView from '../components/MapComponent';
import GooglePlacesInput from '../components/Search';
import CheckIn from '../components/CheckIn';

function MapScreen({ route }) {
  const { location } = route.params;

  const [selectedEstablishment, setSelectedEstablishment] = useState(null);

  const [currentLocation, setCurrentLocation] = useState({
    lat: 55.9533,
    lng: -3.1883,
  });

  const handleDeselectEstablishment = () => {
    setSelectedEstablishment(null);
  };

  return (
    <View style={styles.container}>
      <CustomMapView
        currentLocation={currentLocation}
        setSelectedEstablishment={setSelectedEstablishment}
        selectedEstablishment={selectedEstablishment}
        onPress={handleDeselectEstablishment}
      />
      {selectedEstablishment && (
        <View style={styles.checkInContainer}>
          <CheckIn selectedEstablishment={selectedEstablishment} CheckIn={CheckIn} />
        </View>
      )}
      <View style={styles.searchContainer}>
        <View style={styles.search}>
          <GooglePlacesInput setCurrentLocation={setCurrentLocation} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 60,
    left: 15,
    right: 0,
  },
  checkInContainer: {
    position: 'absolute',
    bottom: 20,
    right: 125,
    backgroundColor: '#FAFAFA',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  search: {
    maxHeight: 50,
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },
});

export default MapScreen;
