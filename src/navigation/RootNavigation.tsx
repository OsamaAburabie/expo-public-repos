import React, { useCallback, useEffect } from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import AppStackNavigation from "./AppStack";
import axios from "axios";

const RootNavigation = () => {
  const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

  const getCountryCode = useCallback(async () => {
    try {
      const res = await axios.get("https://ipapi.co/json/");
      if (res?.data?.country_code) {
        console.log(res.data);
      }
    } catch (e) {
      // console.log(e)
    }
  }, []);

  useEffect(() => {
    getCountryCode();
  }, [getCountryCode]);

  const hideSplashScreen = () => {};
  return (
    <>
      <NavigationContainer theme={DarkTheme} onReady={hideSplashScreen}>
        <Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        >
          {/* <Screen name="AuthStack" component={AuthStackNavigation} /> */}
          <Screen name="AppStack" component={AppStackNavigation} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigation;
