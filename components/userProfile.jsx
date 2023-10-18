import React from 'react';
import { View, Text} from 'react-native';

const UserProfile = ({user}) => {

  return (
    <View style={{ flex: 1, padding: 10, marginLeft: 15}}>
      <Text style={{fontFamily: 'Georgia', fontSize: 24, top: 8, fontWeight: 'bold'}}>{user.username}</Text>
      <Text style={{fontFamily: 'Georgia', fontSize:18, padding: 3, top:3}}>Based in:</Text>
      <Text style={{fontFamily: 'Georgia', fontSize: 20}}>{user.location}</Text>
    </View>
  );
};

export default UserProfile;
