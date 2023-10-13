import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import MapView, { MapInput, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

// class CustomMapView extends Component {  
//   constructor(props) {
//     super(props);
//     this.state = {
//       region: {
//         latitude: 55.9533,
//         longitude: -3.1883,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       },
//       markers: [
//         {
//           latlng: {
//             latitude: 55.957106,
//             longitude: -3.185179,
//           },
//           title: 'CC Blooms',
//           description: 'Popular LGBTQIA+ bar, providing drag shows, dining and dancefloor.',
//         },
//         {
//           latlng: {
//             latitude: 55.9403572,
//             longitude: -3.2115987,
//           },
//           title: 'Kafe Kweer',
//           description: 'LGBTQIA+ owned cafe offering a cosy, sober space.',
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <MapInput notifyChange={(loc)=> getCoordsFromName(loc)}/>
  
//         <MapView
//           style={{flex:1}}
//           provider={PROVIDER_GOOGLE}
//           showsUserLocation={true}
//           region={this.state.region}
//           customMapStyle={this.state.customMapStyle}
//         >
//           {this.state.markers.map((marker, index) => (
//             <Marker
//               key={index}
//               coordinate={marker.latlng}
//               title={marker.title}
//               description={marker.description}
//             />
//           ))}
//         </MapView>
//       </View>
//     );
//   }
// }

// export default CustomMapView;

const MyMapView = (props) => {
  return (
    <MapView
    style={{flex: 1}}
    region={props.region}
    showsUserLocation={true}
    onRegionChange={(reg) => props.onRegionChange(reg)}>

    <MapView.Marker
      coordinate={props.region}/>
    </MapView>
  )
}

export default MyMapView;