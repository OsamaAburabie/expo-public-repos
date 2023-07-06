import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  StatusBar,
  StatusBarStyle,
} from "react-native";
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from "react-native-safe-area-context";
// import CustomHeader from "../CustomHeader";
import { YStack, YStackProps, useTheme } from "tamagui";
import CustomHeader from "../CustomHeader";
type Props = {
  children: React.ReactNode;
  noScrollView?: boolean;
  withHeader?: boolean;
  headerTitle?: string;
  back?: boolean;
  topSpace?: number;
  backgroundColor?: YStackProps["backgroundColor"];
  headerBackgroundColor?: YStackProps["backgroundColor"];
  headerHeight?: number;
  _contentContainerStyle?: ScrollViewProps["contentContainerStyle"];
  withKeyboardAvoidingView?: boolean;
  noSafeAreaView?: boolean;
  noHorizontalPadding?: boolean;
  barStyle?: StatusBarStyle;
  withBackground?: boolean;
  backgroundName?: string;
  bottomTabs?: boolean;
  pointsHeader?: boolean;
  customHorizontalPadding?: number;
  headerRightComponent?: React.ReactNode;
  floatingHeader?: boolean;
  floatingHeaderNoPaddingH?: boolean;
  refreshControl?: ScrollViewProps["refreshControl"];
  onBackPress?: () => void;
  loadingMask?: React.ReactNode;
  safeAreaEdges?: NativeSafeAreaViewProps["edges"];
};
const CustomContainer = ({
  children,
  noScrollView,
  withHeader,
  topSpace,
  backgroundColor,
  _contentContainerStyle,
  withKeyboardAvoidingView,
  noHorizontalPadding,
  barStyle,
  bottomTabs,
  customHorizontalPadding,
  refreshControl,
  loadingMask,
  safeAreaEdges,
  headerBackgroundColor,
  headerHeight,
  headerRightComponent,
  headerTitle,
  back,
  onBackPress,
}: Props) => {
  const { background } = useTheme();
  return (
    <KeyboardAvoidingView
      enabled={withKeyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={[
        {
          flex: 1,
        },
        {
          backgroundColor: backgroundColor || background.val,
        },
      ]}
    >
      <SafeAreaView
        style={{
          flex: 1,
        }}
        edges={safeAreaEdges ? safeAreaEdges : ["top"]}
      >
        {!withHeader && (
          <StatusBar
            barStyle={barStyle ? barStyle : "light-content"}
            translucent
            backgroundColor="transparent"
          />
        )}

        {withHeader && (
          <CustomHeader
            backgroundColor={
              headerBackgroundColor ? headerBackgroundColor : backgroundColor
            }
            title={headerTitle}
            back={back}
            onBackPress={onBackPress}
            headerHeight={headerHeight}
            headerRightComponent={headerRightComponent}
          />
        )}

        {!noScrollView ? (
          <ScrollView
            refreshControl={refreshControl ? refreshControl : undefined}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="interactive"
            bounces={refreshControl ? true : false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              _contentContainerStyle,
              {
                paddingHorizontal: noHorizontalPadding
                  ? 0
                  : customHorizontalPadding
                  ? customHorizontalPadding
                  : 20,
              },
            ]}
          >
            {topSpace && <YStack height={topSpace} />}
            {children}
            {bottomTabs && <YStack height={123} />}
          </ScrollView>
        ) : (
          <YStack f={1} px={!noHorizontalPadding ? 20 : 0}>
            {children}
          </YStack>
        )}

        {loadingMask}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default CustomContainer;
