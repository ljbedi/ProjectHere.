import React from 'react';

import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { Link } from '@react-navigation/native';
// import CheckedInContainer from '../containers/CheckedInContainer';

const CheckInList = ({ checkedIns, navigation }) => {
  {console.log("Checked In", checkedIns)}
  return (
    <View style={styles.checkInContainer}>
      <View style = {{alignItems: 'center', marginVertical: 10}}>
        <Text style = {{fontSize: 24}}>You've Been Here</Text>
      </View>
      <FlatList
        data={checkedIns}
        keyExtractor={(checkIn) => checkIn.id.toString()}
        renderItem={({ item : checkIn }) => (

          <TouchableHighlight onPress={() => navigation.navigate('Establishment', { id: checkIn.id })}>
            <View style={styles.checkInList}>
              <Link to={{ screen: 'Establishment', params: { id: checkIn.id } }} style={styles.link}>
                {checkIn.name}
              </Link>
            </View>
          </TouchableHighlight>

        )}
      />
    </View>
  );
};

const styles = StyleSheet.create ({

  checkInContainer: {
    bottom: 300
  },
  checkInList: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
    backgroundColor: '#b2cdbc',
    borderWidth: 0.2,
    borderColor:'#8ea396',
  },
  link: {
    fontSize: 20
  }
})

export default CheckInList;

