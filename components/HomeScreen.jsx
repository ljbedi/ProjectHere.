import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

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
      <Button
        title="Your Check Ins"
        onPress={() => navigation.navigate('Checked-In List')}
        />
    </View>
  );
}

export default HomeScreen;