import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import customMapStyle from '../styles/MapStyle';

const BASE_URL = "http://localhost:8080";

class CustomMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [],
    };
  }

  componentDidMount() {
    this.fetchEstablishments();
  }

  fetchEstablishments = () => {
    fetch(BASE_URL + "/establishments")
      .then((response) => response.json())
      .then((establishments) => {
        const markers = establishments.map((establishment) => ({
          latlng: { latitude: establishment.latitude, longitude: establishment.longitude },
          id: establishment.id,
          title: establishment.title,
          description: establishment.description,
          data: establishment
        }));
        this.setState({ markers });
      });
  };

  handlePressEvent(data){
    console.log(data)
    this.props.setSelectedEstablishment(data)}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={{...this.state.region, latitude: this.props.currentLocation.lat, longitude: this.props.currentLocation.lng}}
          customMapStyle={customMapStyle}
          onPress={() => this.props.selectedEstablishment && this.props.setSelectedEstablishment(null)}

        >
          {this.state.markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              onPress={() => setTimeout(() => this.handlePressEvent(marker.data), 1)}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

export default CustomMapView;



// import React, { Component } from 'react';
// import { View } from 'react-native';
// import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import customMapStyle from '../styles/MapStyle';


// const getEstablishments = () => {
//   const [establishments, setEstablishments] = useState([]);
//   const BASE_URL = "http://localhost:8080"; 

//   useEffect(() => {
//     fetchEstablishments();
//   }, []);

//   const fetchEstablishments = () => {
//     fetch(BASE_URL + "/establishments")
//       .then((response) => response.json())
//       .then((establishments) => setEstablishments(establishments))
//   };
  
// class CustomMapView extends Component {  
//   constructor(props) {
//     super(props);
//     this.state = {
//       region: {
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       },
    
//       markers: establishments.map(establishment => {
//         return 
//         {latlng: 
//           {latitude: establishment.lat, longitude: establishment.lng}
//         } id: establishment.id, title: establishment.title, description: establishment.description})
//     };
//   }

// handlePressEvent(latlng){
//   console.log(latlng)
//   this.props.setSelectedEstablishment(latlng)
// }
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <MapView
//           style={{flex:1}}
//           provider={PROVIDER_GOOGLE}
//           showsUserLocation={true}
//           region={{...this.state.region, latitude: this.props.currentLocation.lat, longitude: this.props.currentLocation.lng}}
//           customMapStyle={customMapStyle}
//         >
//           {this.state.markers.map((marker, index) => (
//             <Marker
//               key={index}
//               coordinate={marker.latlng}
//               title={marker.title}
//               description={marker.description}
//               onPress={() => 
//                 this.handlePressEvent(marker.latlng)}
//             />
            
//           ))}
//         </MapView>
//       </View>
//     );
//   }
// }}

// export default CustomMapView;