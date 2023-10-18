import React from 'react';
import { View, Text} from 'react-native';

const UserProfile = ({user}) => {

  return (
    <View style={{ flex: 1 }}>
      <Text>{user.username}</Text>
    </View>
  );
};

export default UserProfile;
