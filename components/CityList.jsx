import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';




const CityList = ({ navigation, cities }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 20 }}>Cities</Text>
      </View>
      <FlatList
        data={cities}
        keyExtractor={(city) => city.id.toString()}
        renderItem={({ item: city }) => (
          <View>
          <Button
          title={city.name}
          onPress={() => navigation.navigate('City Profile', {city})}></Button>
          </View>
        )}
      />
    </View>
  );
};


export default CityList;

