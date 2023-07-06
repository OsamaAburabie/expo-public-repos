import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabsStackParamList } from "./types";
import Profile from "../screens/Profile";
import Repositories from "../screens/Repositories";
import CustomBottomTabs from "@components/CustomBottomTabs";

const BottomTabsStack = () => {
  const { Navigator, Screen } =
    createBottomTabNavigator<BottomTabsStackParamList>();
  return (
    <Navigator
      tabBar={(props) => <CustomBottomTabs {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Repos" component={Repositories} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};
export default BottomTabsStack;
