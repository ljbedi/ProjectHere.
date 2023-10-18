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
      <Text style={styles.text1}>More destinations coming soon!</Text>
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
  text1: {
    bottom: 350,
    fontSize: 24,
  }
});


export default CityList;

