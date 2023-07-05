import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from './types';
import BottomTabsStack from './BottomTabStack';

const AppStackNavigation = () => {
  const {Navigator, Screen} = createNativeStackNavigator<AppStackParamList>();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BottomTabsStack">
      <Screen name="BottomTabsStack" component={BottomTabsStack} />
    </Navigator>
  );
};
export default AppStackNavigation;
