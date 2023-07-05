import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabsStackParamList} from './types';
import Profile from '../screens/Profile';
import Repositories from '../screens/Repositories';

const BottomTabsStack = () => {
  const {Navigator, Screen} =
    createBottomTabNavigator<BottomTabsStackParamList>();
  return (
    <Navigator>
      <Screen name="Repositories" component={Repositories} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};
export default BottomTabsStack;
