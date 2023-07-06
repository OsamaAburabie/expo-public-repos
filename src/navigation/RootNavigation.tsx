import React, { useCallback, useEffect } from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import AppStackNavigation from "./AppStack";
import axios from "axios";
import { useAppDispatch } from "@stores/index";
import { setCountry } from "@stores/AuthReducer";
import { LocationData } from "@stores/types";
import * as SplashScreen from "expo-splash-screen";
import { useQuery } from "@tanstack/react-query";
import { getLocation } from "@api/Location/getLocation";

const RootNavigation = () => {
  const { Navigator, Screen } = createStackNavigator<RootStackParamList>();
  const dispatch = useAppDispatch();

  useQuery({
    queryKey: ["location"],
    queryFn: getLocation,
    onSuccess(data) {
      dispatch(setCountry(data));
    },
  });

  const hideSplashScreen = () => {
    SplashScreen.hideAsync();
  };

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
