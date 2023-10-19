import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const CityProfile = ({ route }) => {
  const { city } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>{city.name}</Text>
          <Text style={styles.heading}>Description</Text>
          <Text style={styles.body}>{city.description}</Text>
          <Text style={styles.heading}>History</Text>
          <Text style={styles.body}>{city.history}</Text>
          <Text style={styles.heading}>Health and Wellbeing Resources</Text>
          <Text style={styles.body}>{city.wellbeing}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9d3c2',
  },
  scrollViewContent: {
    padding: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#d5eadd',
    padding: 10,
    margin: 30,
    borderRadius: 20,
    shadowRadius: 10,
    shadowColor: 'black'
  },
  body: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    padding: 20,
  },
});

export default CityProfile;
