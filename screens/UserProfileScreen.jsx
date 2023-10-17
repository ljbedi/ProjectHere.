import * as React from 'react';
import { View, Text } from 'react-native';
import UserContainer from '../containers/UserContainer';
import CheckedInContainer from '../containers/CheckedInContainer';

function UserProfileScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>USER PROFILE</Text>
      <UserContainer/>
      <CheckedInContainer navigation={navigation}/>
    </View>
  );
}

export default UserProfileScreen;