import * as React from 'react';
import { Button, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
function SplashScreen( {navigation} ) {
  return (
    <LinearGradient
      colors={['#325F62', '#123a3f']}
      style={styles.container}
    >
      <Text style = {styles.text}>here.</Text>
      <View>
      <Image
        style={styles.image}
        source={{ uri: 'https://www.cooperhewitt.org/wp-content/uploads/2023/06/Intersex-inclusive_pride_flag.png' }}
      />
      </View>
    </LinearGradient>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 100,
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    color: '#FDF295',
    padding: 20,
  },
  image: {
    alignItems: 'center',
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});
export default SplashScreen;