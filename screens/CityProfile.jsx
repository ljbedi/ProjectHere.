import React from 'react';
import { View, Text} from 'react-native';

const CityProfile = ({route}) => {

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

