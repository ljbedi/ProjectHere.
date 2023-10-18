import React from 'react';
import { View, Text, FlatList } from 'react-native';
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
          <View style={style.checkInList}>
            <Link to={{screen: 'Establishment', params: {id: checkIn.id}}}>
              {checkIn.name}
            </Link>
          </View>
        )}
      />
    </View>
  );
};

const style= Stylesheet.create ({
  checkInList: {
    
  }
})

export default CheckInList;


