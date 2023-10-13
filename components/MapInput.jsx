import { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


// const GooglePlacesInput = () => {

//   return (
//     <GooglePlacesAutocomplete
//       styles={{
//         container:{
//           position: 'absolute',
//           backgroundColor: '#FFF',
//           zIndex: 10,//Forcing it to front
//           width: "100%"
//       }
//       }}
//       placeholder='Search'
//       minLength={1}
//       autofocus={true}
//       listViewDisplayed={false}
//       fetchDetails={true}
//       onPress={(data, details = null) => {
//         this.props.notifyChange(details.geometry.location)
//       }}
//       query={{
//         key: process.env.EXPO_PUBLIC_GOOGLE_CLOUD_API_KEY,
//         language: 'en',
//         type: "establishment",
//         components: 'country:uk'
//       }}
//       nearbyPlacesAPI='GooglePlacesSearch'
//       debounce={200}
//     />
//   );
// };

// export default GooglePlacesInput;

// Gets the lat/lng
// console.log(details.geometry.location)

class MapInput extends Component {

  render() {
    return (

      <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={1}
      autoFocus={true}
      returnKeyType={'search'}
      listViewDisplayed={false}
      fetchDetails={true}
      onPress={(data, details = null) => {
        this.props.notifyChange(details.geometry.location);
      }
    }
    query={{
      key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
      language: 'en',
      type: 'establishment',
      components: 'country:uk'
    }}
    nearbyPlacesApi='GooglePlacesSearch'
    debounce={200}
    />
    )
  }
}

export default MapInput;