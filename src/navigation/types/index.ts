import { NavigatorScreenParams } from "@react-navigation/native";

export type AppStackParamList = {
  BottomTabsStack: NavigatorScreenParams<BottomTabsStackParamList>;
};

export type AuthStackParamList = {
  Login: undefined;
};

export type BottomTabsStackParamList = {
  Profile: undefined;
  Repos: undefined;
};

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  AppStack: NavigatorScreenParams<AppStackParamList>;
};
