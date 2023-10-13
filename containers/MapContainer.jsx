import { Component } from "react";
import MapInput from "../components/MapInput";
import MyMapView from "../components/MyMapView";
import { View } from "react-native";
import Geolocation from 'react-native-geolocation-service'

class MapContainer extends Component {
  state= {
    region: {},
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.updateState({
          latitude,
          longitude,
        });
      },
      (error) => {
        console.error('Error getting location:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    this.getInitialState();
  }

  getInitialState(){
    getLocation().then(data => {
      this.updateState({
        latitude: data.latitude,
        longitude: data.longitude,
      });
    });
  }

  updateState(location) {
    this.setState({
      region: {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.003,
        longitude: 0.003,
      }
    });
  }

  getCoordsFromName(loc){
    this.updateState({
      latitude: loc.lat,
      longitude:loc.lng,
    });
  }

  onMapRegionChange(region) {
    this.setState({region});
  }

  render(){
    return(
      <View style={{ flex:1 }}>
        <View style={{flex: 0.4}}>
          <MapInput
          notifyChange={(loc) => this.getCoordsFromName(loc)}/>
        </View> 
        {
          this.state.region['latitude'] ?
          <View style={{flex: 1}}>
            <MyMapView 
              region={this.state.region}
              onRegionChange={(reg) => this.onMapRegionChange(reg)}/>
          </View> : null
        }
      </View>
    )
  }
}

export default MapContainer;