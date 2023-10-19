import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import UserContainer from '../containers/UserContainer';
import CheckedInContainer from '../containers/CheckedInContainer';

function UserProfileScreen({navigation, route}) {
  return (
    <SafeAreaView style={styles.userContainer}>
      <Text>Your Profile</Text>
      <UserContainer route={route}/>
      <CheckedInContainer navigation={navigation}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  userContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b9d3c2'
  }
})


export default UserProfileScreen;