import { useEffect, useState } from "react";
import { View, Text } from "react-native";

const EstablishmentContainer = ({route, navigation}) => {
  const [establishment, setEstablishment] = useState([]);
  const BASE_URL = "http://localhost:8080";

  const { id } = route.params;
  
  useEffect(() => {
    fetchEstablishment();
  }, []);

  const fetchEstablishment = () => {
    fetch(BASE_URL + `/establishments/${id}`)
      .then((response) => response.json())
      .then((establishments) => setEstablishment(establishments));
  }

  console.log(establishment.reviews)

  return (
    <View>
      {establishment && 
      <>
        <Text>{establishment.name}</Text>
        <Text>{establishment.description}</Text>
        <Text>Total Checked In Users: {establishment.checked_in_users && establishment.checked_in_users.length}</Text>
        <Text>Reviews:</Text>
        {establishment.reviews && establishment.reviews.map(review => <Text>{review.post} ({review.rating})</Text>)}
      </>
      }
    </View>
  )
};

export default EstablishmentContainer;