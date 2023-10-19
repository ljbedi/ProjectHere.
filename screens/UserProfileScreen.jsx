import * as React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import UserContainer from '../containers/UserContainer';
import CheckedInContainer from '../containers/CheckedInContainer';

function UserProfileScreen({navigation, route}) {
  return (
    <SafeAreaView style={styles.userContainer}>
      <Text style={{alignSelf: 'center', fontFamily: 'Georgia', fontSize: 20}}>Your Profile</Text>
      <UserContainer route={route}/>
      <CheckedInContainer navigation={navigation}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  userContainer: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: "#b9d3c2",
  }
})


export default UserProfileScreen;