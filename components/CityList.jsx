import React from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';

const CityList = ({ navigation, cities }) => {
  return (
    <View>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
      </View>
      <FlatList
        data={cities}
        keyExtractor={(city) => city.id.toString()}
        renderItem={({ item: city }) => (
          <View>
          <Button 
          title={city.name}
          onPress={() => navigation.navigate('City Profile', {city})}
          style={styles.button}></Button>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    textDecorationColor: 'black',
    color: 'black'
  },
});


export default CityList;

