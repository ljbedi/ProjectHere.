import React from 'react';
import { View, Text, FlatList } from 'react-native';
// import CheckedInContainer from '../containers/CheckedInContainer';

const CheckInList = ({ checkIns }) => {
  return (
    <View style={{flex:1}}>
    <View style = {{alignItems: 'center', marginVertical: 10}}>
      <Text style = {{fontSize: 20}}>List of Check-Ins:</Text>
      </View>
      <FlatList
        data={checkIns}
        keyExtractor={(checkIn) => checkIn.id.toString()}
        renderItem={({ item : checkIn }) => (
          <View>
            <Text>
              Safety Rating: {checkIn.safety_rating}, Establishment ID: {checkIn.establishment_id}, User ID: {checkIn.user_id}
            </Text>
            {/* <CheckedInContainer/> */}
          </View>
        )}
      />
    </View>
  );
};

export default CheckInList;


