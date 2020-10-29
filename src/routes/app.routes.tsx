import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  Home, 
  SearchLocation, 
  LocaleMap, 
  DetailsEnterprise, 
  DetailsProvider, 
  SignIn, 
  SignUp, 
  ProfileProvider, 
  EditProfile,
  Payment,
  ForgotPassword
} from '../views';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator screenOptions={{
    headerShown: false,
    cardStyle: { backgroundColor: '#563399' }
  }}>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="SignIn" component={SignIn} />
    <App.Screen name="SignUp" component={SignUp} />
    <App.Screen name="ForgotPassword" component={ForgotPassword} />
    <App.Screen name="ProfileProvider" component={ProfileProvider} />
    <App.Screen name="EditProfile" component={EditProfile} />
    <App.Screen name="Payment" component={Payment} />
    <App.Screen name="SearchLocation" component={SearchLocation} />
    <App.Screen name="LocaleMap" component={LocaleMap} />
    <App.Screen name="DetailsEnterprise" component={DetailsEnterprise} />
    <App.Screen name="DetailsProvider" component={DetailsProvider} />
  </App.Navigator>
);

export default AppRoutes;
