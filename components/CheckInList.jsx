import React from 'react';
import { View, Text, FlatList } from 'react-native';
// import CheckedInContainer from '../containers/CheckedInContainer';

const CheckInList = ({ checkedIns }) => {
  {console.log("Checked In", checkedIns)}
  return (
    <View style={{flex:1}}>
      <View style = {{alignItems: 'center', marginVertical: 10}}>
        <Text style = {{fontSize: 20}}>List of Check-Ins:</Text>
      </View>
      <FlatList
        data={checkedIns}
        keyExtractor={(checkIn) => checkIn.id.toString()}
        renderItem={({ item : checkIn }) => (
          <View>
            <Text>
              Name: {checkIn.name}, Description: {checkIn.description}
            </Text>
            {/* <CheckedInContainer/> */}
          </View>
        )}
      />
    </View>
  );
};

export default CheckInList;


