import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen( {navigation} ) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Destinations"
        onPress={() => navigation.navigate('Destinations')}
      />
      <Button
        title="Go to Map"
        onPress={() => navigation.navigate('Map')}
      />
      <Button
        title="Your User Profile"
        onPress={() => navigation.navigate('User Profile')}
      />
    </View>
  );
}

export default HomeScreen;