import React from "react";
import CustomContainer from "@components/CustomContainer";
import { Text, XStack, YStack } from "tamagui";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {};

const Profile = ({}: Props) => {
  return (
    <CustomContainer withHeader headerTitle="Profile">
      <XStack jc="center">
        <YStack jc="center" ai="center" gap={10}>
          <Image
            source={"https://avatars.githubusercontent.com/u/7525670?v=4"}
            style={styles.avatar}
          />
          <Text fontSize={20}>Osama</Text>
        </YStack>
      </XStack>

      <YStack mt={40} gap={20}>
        <YStack bg={"$secondary"} padding={20} borderRadius={8}>
          <Text fontSize={12} fontWeight={"700"}>
            +962 79 000 0000
          </Text>
        </YStack>

        <YStack bg={"$secondary"} padding={20} borderRadius={8}>
          <Text fontSize={12} fontWeight={"700"}>
            Jordan
          </Text>
        </YStack>
      </YStack>
    </CustomContainer>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 25,
  },
});

export default Profile;
