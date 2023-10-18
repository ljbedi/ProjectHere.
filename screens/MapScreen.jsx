import React, {useState} from 'react';
import CustomMapView from '../components/MapComponent';
import GooglePlacesInput from '../components/Search';
import CheckIn from '../components/CheckIn';


function MapScreen( {route} ) {

const {location} = route.params
const [selectedEstablishment, setSelectedEstablishment] = useState(null)

  const [currentLocation, setCurrentLocation] = useState({
    lat: 55.9533,
    lng: -3.1883
  })

  return (
    <>
    <>
    <GooglePlacesInput setCurrentLocation={setCurrentLocation} />
    <CustomMapView currentLocation={currentLocation} setSelectedEstablishment={setSelectedEstablishment}/>
    <CheckIn selectedEstablishment={selectedEstablishment} CheckIn={CheckIn}/>
    </>
    </>
  );
}

export default MapScreen;


