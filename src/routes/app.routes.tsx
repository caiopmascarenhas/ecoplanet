import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, SearchLocation, LocaleMap } from '../views';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator screenOptions={{
    headerShown: false,
    cardStyle: { backgroundColor: '#999' }
  }}>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="SearchLocation" component={SearchLocation} />
    <App.Screen name="LocaleMap" component={LocaleMap} />
  </App.Navigator>
);

export default AppRoutes;
