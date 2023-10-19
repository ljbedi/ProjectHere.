import React from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';

const CityList = ({ navigation, cities }) => {
  return (
    
    <View style = {styles.container}>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
      </View>
      <FlatList style = {styles.city_list}
        data={cities}
        keyExtractor={(city) => city.id.toString()}
        renderItem={({ item: city }) => (
          <View>
          <Button 
  title={city.name}
  onPress={() => navigation.navigate('City Profile', {city})}
  color="black"
  style={styles.button}
></Button>

          </View>
        )}
      />
      <Text style={styles.text1}>More queer destination guides coming soon!</Text>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 150,
    maxHeight: 350,
    fontWeight: 'bold',
  },
  button: {
    textDecorationColor: 'black',
    color: 'black',
    fontWeight: 'bold'
  },
  text1: {
    bottom: 200,
    fontSize: 24,
    fontWeight: 'bold',
    maxWidth: 350,
    margin: -20,
    justifyContent: 'center',
  },
  city_list: {
    fontWeight: 'bold',
    backgroundColor: '#d5eadd',
    bottom: 250,
    padding: 20,
  
    borderRadius: 15,
  }
});


export default CityList;

