import { NavigationContainerRef } from "@react-navigation/native";
import { createRef } from "react";
import { AppStackParamList } from "../navigation/types";

export const navigationRef =
  createRef<NavigationContainerRef<AppStackParamList>>();
export const resetToSplash = () => {
  navigationRef.current?.reset({ index: 0, routes: [{ name: "Splash" }] });
};
export const goBack = () => {
  navigationRef.current?.goBack();
};
export const doubleGoBack = () => {
  setImmediate(() => {
    navigationRef.current?.goBack();
    navigationRef.current?.goBack();
  });
};
