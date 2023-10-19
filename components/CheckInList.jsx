import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';
// import CheckedInContainer from '../containers/CheckedInContainer';

const CheckInList = ({ checkedIns }) => {
  {console.log("Checked In", checkedIns)}
  return (
    <View style={{flex:1}}>
      <View style = {{alignItems: 'center', marginVertical: 10}}>
        <Text style = {{fontSize: 20}}>You've Been Here</Text>
      </View>
      <FlatList
        data={checkedIns}
        keyExtractor={(checkIn) => checkIn.id.toString()}
        renderItem={({ item : checkIn }) => (
          <View style={styles.checkInList}>
            <Link to={{screen: 'Establishment', params: {id: checkIn.id}}} style={styles.link}>
              {checkIn.name} 
            </Link>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  checkInList: {
    fontSize: 50,
    alignItems: 'center',
  },
  link: {
    Text: 20
  }
})

export default CheckInList;

