import React, { useState, useEffect } from 'react';
import { View, Button, Text, Alert } from 'react-native';
import * as Location from 'expo-location';

const CheckIn = () => {
  const [location, setLocation] = useState(null);
  const [checkIns, setCheckIns] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const handleCheckIn = async () => {
    try {
      if (location) {
        const response = await fetch('https://localhost:8080/checked_in', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          })
        });

        if (response.ok) {
          const newCheckIn = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          };
          setCheckIns([...checkIns, newCheckIn]);
          Alert.alert('Check-In Successful', `You have checked in at Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`);
        } else {
          Alert.alert('Check-In Failed', 'Failed to check in. Please try again later.');
        }
      } else {
        Alert.alert('Location not available', 'Please enable location services and try again.');
      }
    } catch (error) {
      console.error('Error occurred during check-in:', error);
      Alert.alert('Check-In Error', 'An error occurred during check-in. Please try again later.');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {location && (
        <View>
          <Text>Your Current Location:</Text>
          <Text>Latitude: {location.coords.latitude}</Text>
          <Text>Longitude: {location.coords.longitude}</Text>
        </View>
      )}
      <Button title="Check-In" onPress={handleCheckIn} />
    </View>
  );
};

export default CheckIn;
