import React, { useState, useEffect } from 'react';
import { View, Button, Text, Alert } from 'react-native';

const CheckIn = ({ selectedEstablishment }) => {
  const [checkedInEstablishment, setCheckedInEstablishment] = useState(null);
  

  const handleCheckIn = async () => {
    try {
      if (selectedEstablishment) {
        
        const response = await fetch(`http://localhost:8080/establishments/find?lat=${selectedEstablishment.latitude}&lng=${selectedEstablishment.longitude}&user_id=1`);
        console.log(response.status)
        if (response.ok) {
          const establishment = await response.json()
          const newCheckIn = {
            establishment_id: establishment.id,
            user_id: 1
          };
          setCheckedInEstablishment(selectedEstablishment);
          Alert.alert('Check-In Successful', `You have checked in at ${selectedEstablishment.name}`);
        } else {
          Alert.alert('Check-In Failed');
        }
      } else {
        Alert.alert('Establishment not available', 'Please select a valid establishment and try again.');
      }
    } catch (error) {
      console.error('Error occurred during check-in:', error);
      Alert.alert('Check-In Error');
    }

  };
console.log(selectedEstablishment)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {selectedEstablishment && (
        <View>
          <Text>Name: {selectedEstablishment.name}</Text>

        </View>
      )}
      <Button title="Check-In" onPress={handleCheckIn} />
    </View>
  );
};

export default CheckIn;