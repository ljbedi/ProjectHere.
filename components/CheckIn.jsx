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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {selectedEstablishment && (
        <View>
          <Text>Selected Establishment:</Text>
          <Text>Name: {selectedEstablishment.name}</Text>
          <Text>Latitude: {selectedEstablishment.latitude}</Text>
          <Text>Longitude: {selectedEstablishment.longitude}</Text>
        </View>
      )}
      <Button title="Check-In" onPress={handleCheckIn} />
    </View>
  );
};

export default CheckIn;




// import React, { useState, useEffect } from 'react';
// import { View, Button, Text, Alert } from 'react-native';
// import * as Location from 'expo-location';

// const CheckIn = () => {

//   const handleCheckIn = async () => {
//     try {
//       if (location) {
//         const response = await fetch('https://localhost:8080/checked_in', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             latitude: location.coords.latitude,
//             longitude: location.coords.longitude
//           })
//         });

//         if (response.ok) {
//           const newCheckIn = {
//             latitude: location.coords.latitude,
//             longitude: location.coords.longitude
//           };
//           setCheckIns([...checkIns, newCheckIn]);
//           Alert.alert('Check-In Successful', `You have checked in at Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`);
//         } else {
//           Alert.alert('Check-In Failed');
//         }
//       } else {
//         Alert.alert('Location not available', 'Please enable location services and try again.');
//       }
//     } catch (error) {
//       console.error('Error occurred during check-in:', error);
//       Alert.alert('Check-In Error');

//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {location && (
//         <View>
//           <Text>Your Current Location:</Text>
//           <Text>Latitude: {location.coords.latitude}</Text>
//           <Text>Longitude: {location.coords.longitude}</Text>
//         </View>
//       )}
//       <Button title="Check-In" onPress={handleCheckIn} />
//     </View>
//   );
// };

// export default CheckIn;
