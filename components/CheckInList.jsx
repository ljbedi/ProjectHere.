import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CheckedInContainer from '../containers/CheckedInContainer';

const CheckInList = ({ checkIns }) => {
  return (
    <View>
      <Text>List of Check-Ins:</Text>
      {/* <CheckedInContainer checkIns={checkIns} />  */}
      <FlatList
        data={checkIns}
        keyExtractor={(checkIn) => item.id.toString()}
        renderItem={({ item : checked_in }) => (
          <View key={checked_in.id}>
            <Text>{`Safety Rating: ${checked_in.safety_rating}, Establishment ID: ${checked_in.establishment_id}, User ID: ${checked_in.user_id}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CheckInList;


