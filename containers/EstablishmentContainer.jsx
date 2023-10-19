import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

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
    <>
    <View style={styles.establishmentContainter}>
      {establishment && 
      <>
        <Text style={styles.ename}>{establishment.name}</Text>
        <Text style={styles.edescription}>{establishment.description}</Text>
        <View style={{ top: 15}}>
        <Text style={styles.checkedin}>How Many Humans Have Checked in Here! {establishment.checked_in_users && establishment.checked_in_users.length}</Text>
        <Text style={styles.reviews}>Reviews:</Text>
        {establishment.reviews && establishment.reviews.map(review => <Text>{review.post}. Safety Rating: ({review.rating})</Text>)}
        </View>
      </>
      }
    
    </View>
    </>
  )
};

const styles= StyleSheet.create ({
  establishmentContainter: {
    padding: 20,
    bottom: 100,
  },
  ename: {
    fontFamily: 'Georgia',
    fontSize: 24,
    bottom: 20
  },
  edescription: {
    fontFamily: 'Georgia',
    backgroundColor: 'lightgrey',
    padding: 8,
    fontSize: 18,
    borderWidth:2,
    borderColor: 'teal',
    shadowOpacity: 0.3,
    shadowRadius: 1
  },
  checkedin: {
    fontFamily: 'Georgia',
    fontSize: 17,
    bottom: 8
  },
  reviews: {
    fontSize: 20,
  }
})
export default EstablishmentContainer;