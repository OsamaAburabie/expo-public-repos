import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';
import Login from '../screens/Login';

const AuthStackNavigation = () => {
  const {Navigator, Screen} = createNativeStackNavigator<AuthStackParamList>();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};
export default AuthStackNavigation;
