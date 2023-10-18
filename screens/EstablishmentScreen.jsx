import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EstablishmentContainer from '../containers/EstablishmentContainer';

function EstablishmentScreen({route, navigation}) {

  return (
    <View style={styles.establishmentContainer}>
      <EstablishmentContainer route={route} navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create ({
  establishmentContainer: {
    backgroundColor: "#b9d3c2",
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})
export default EstablishmentScreen;