import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const CityProfile = ({route}) => {

  const {city} = route.params

  return (
    <View style={style.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={{ fontSize: 24 }}>{city.name}</Text>
        <Text style={style.heading}>Description</Text>
        <Text style={style.body}>{city.description}</Text>
        <Text style={style.heading}>History</Text>
        <Text style={style.body}>{city.history}</Text>
        <Text style={style.heading}>Health and Wellbeing Resources</Text>
        <Text style={style.body}>{city.wellbeing}</Text>
      </View>
    </View>
  );
};

const style= StyleSheet.create ({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    alignItems: 'center'
  }
})


export default CityProfile;

