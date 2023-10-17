import * as React from 'react';
import { View, Text } from 'react-native';
import CityContainer from '../containers/CityContainer';

function DestinationScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CityContainer navigation={navigation}/>
    </View>
  );
}

export default DestinationScreen;