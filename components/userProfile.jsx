import React from 'react';
import { View, Text, FlatList } from 'react-native';
import userContainer from '../containers/userContainer';

const UserProfile = ({ users }) => {
  console.log(users)
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 20 }}>Users</Text>
      </View>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item: user }) => (
          <View>
            <Text>
              Username: {user.username} email: {user.email} Location: {user.location}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default UserProfile;