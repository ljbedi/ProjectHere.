import * as React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import CityContainer from '../containers/CityContainer';

function DestinationScreen({navigation}) {
  return (
    <SafeAreaView style={styles.cityContainer}>
      <CityContainer navigation={navigation}/>
    </SafeAreaView>
  );
}

const styles= StyleSheet.create ({
  cityContainer: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#b9d3c2'
  }
})

export default DestinationScreen;