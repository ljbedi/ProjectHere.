import * as React from 'react';
import { View, Text } from 'react-native';
import EstablishmentContainer from '../containers/EstablishmentContainer';

function EstablishmentScreen({route, navigation}) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <EstablishmentContainer route={route} navigation={navigation}/>
    </View>
  );
}

export default EstablishmentScreen;