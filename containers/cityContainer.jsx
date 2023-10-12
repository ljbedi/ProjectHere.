import { useEffect, useState } from "react";
import CityList from "../components/CityList";
import CityProfile from "../components/CityProfile";

const CityContainer = ({navigation}) => {
  const [cities, setCities] = useState([]);
  const BASE_URL = "http://localhost:8080";
  console.log(navigation)
  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = () => {
    fetch(BASE_URL + "/cities")
      .then((response) => response.json())
      .then((cities) => setCities(cities));
  }

  return (
    <>
    <CityList cities={cities} navigation={navigation}/>
    </>
  )
};

export default CityContainer;