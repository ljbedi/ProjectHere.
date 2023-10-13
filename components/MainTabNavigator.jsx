import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './MapScreen';
import UserProfileScreen from './UserProfileScreen';
import DestinationScreen from './DestinationScreen';
import HomeScreen from './HomeScreen';
import CityProfile from './CityProfile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Destinations" component={DestinationScreen} />
      <Tab.Screen name="City Profile" component={CityProfile} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="User Profile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
