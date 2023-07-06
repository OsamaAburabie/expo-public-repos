import { MotiView } from "moti";
import React from "react";
import { TouchableOpacity, Image, Pressable } from "react-native";
import { Text, YStack, useTheme } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  icon?: string;
  onPress: () => void;
  active: boolean;
};

const NavigationButton = (props: Props) => {
  const { primary } = useTheme();
  return (
    <Pressable
      onPress={props.onPress}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
    >
      <MotiView
        animate={{
          scale: props.active ? 1.15 : 1,
        }}
        transition={{
          type: "spring",
        }}
      >
        <YStack
          pointerEvents="none"
          ai="center"
          jc="center"
          gap={4}
          padding={10}
        >
          {props.title === "Profile" ? (
            <Ionicons
              name="person"
              size={18}
              color={props.active ? primary.val : "#999"}
            />
          ) : (
            <MaterialCommunityIcons
              name="file-tree"
              size={18}
              color={props.active ? primary.val : "#999"}
            />
          )}

          <Text
            fontSize={11}
            color={props.active ? "$primary_text" : "$secondary_text"}
          >
            {props.title}
          </Text>
        </YStack>
      </MotiView>
    </Pressable>
  );
};

export default NavigationButton;
