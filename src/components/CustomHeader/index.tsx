import React, { memo } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { Avatar, Text, useTheme, XStack, YStack, YStackProps } from "tamagui";
import { goBack } from "../../util/navitation";
import { Ionicons } from "@expo/vector-icons";

type HeaderProps = {
  back?: boolean;
  title?: string;
  backgroundColor?: YStackProps["backgroundColor"];
  headerHeight?: number;
  headerRightComponent?: React.ReactNode;
  children?: React.ReactNode;
  onBackPress?: () => void;
  themeToggle?: boolean;
};

const CustomHeader = ({
  back,
  backgroundColor,
  title,
  headerHeight,
  headerRightComponent,
  children,
  onBackPress,
}: HeaderProps) => {
  const { background } = useTheme();

  return (
    <YStack
      backgroundColor={backgroundColor ? backgroundColor : background.val}
    >
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="transparent"
      />
      <XStack
        justifyContent="space-between"
        alignItems="center"
        height={headerHeight || 60}
        paddingHorizontal={20}
        // backgroundColor={"black"}
      >
        <YStack
          position="absolute"
          left={0}
          right={0}
          top={0}
          bottom={0}
          justifyContent="center"
          alignItems="center"
        >
          {title && (
            <Text fontSize={16} fontWeight={"600"}>
              {title}
            </Text>
          )}
        </YStack>
        {back && (
          <TouchableOpacity onPress={onBackPress || goBack}>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>
        )}

        {headerRightComponent}
      </XStack>
      {children}
    </YStack>
  );
};

export default memo(CustomHeader);
