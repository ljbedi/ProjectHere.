import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CityContainer from '../containers/cityContainer';

const CityProfile = ({route}) => {
  console.log("rest")
  console.log(route.params.city)

  const {city} = route.params

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 20 }}>{city.id.name}</Text>
        <Text>{city.description}</Text>
        <Text>{city.history}</Text>
        <Text>{city.wellbeing}</Text>
      </View>
    </View>
  );
};



export default CityProfile;

