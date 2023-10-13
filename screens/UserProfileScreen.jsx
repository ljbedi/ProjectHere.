import * as React from 'react';
import { View, Text } from 'react-native';
import UserContainer from '../containers/userContainer';

function UserProfileScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>USER PROFILE</Text>
      <UserContainer/>
    </View>
  );
}

export default UserProfileScreen;