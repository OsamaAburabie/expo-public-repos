import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {RootStackParamList} from './types';
import AppStackNavigation from './AppStack';

const RootNavigation = () => {
  const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

  const hideSplashScreen = () => {};
  return (
    <>
      <NavigationContainer onReady={hideSplashScreen}>
        <Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}>
          {/* <Screen name="AuthStack" component={AuthStackNavigation} /> */}
          <Screen name="AppStack" component={AppStackNavigation} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigation;
