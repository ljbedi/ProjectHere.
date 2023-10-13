import Geolocation from 'react-native-geolocation-service'

// export const getLocation = () => {
//   return new Promise(
//     (resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(
        
//         (data) => resolve(data.coords),
//         (err) => reject(err)
//       );
//       console.log(getCurrentPosition)
//     }
//   );
// }

const getLocation = Geolocation.getCurrentPosition(
  (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // Use the latitude and longitude in your app.
  },
  (error) => {
    console.error('Error getting location:', error);
  },
  { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
);
