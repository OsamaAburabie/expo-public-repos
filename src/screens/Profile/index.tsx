import React from "react";
import CustomContainer from "@components/CustomContainer";
import { Text, XStack, YStack } from "tamagui";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { useAppSelector } from "@stores/index";

const Profile = () => {
  const account = useAppSelector((state) => state.authReducer);

  return (
    <CustomContainer withHeader headerTitle="Profile">
      <XStack jc="center">
        <YStack jc="center" ai="center" gap={10}>
          <Image source={account.avatar_url} style={styles.avatar} />
          <Text fontSize={20}>{account.name}</Text>
        </YStack>
      </XStack>

      <YStack mt={40} gap={20}>
        <YStack bg={"$secondary"} padding={20} borderRadius={8}>
          <Text fontSize={12} fontWeight={"700"}>
            {account.phone}
          </Text>
        </YStack>

        <YStack bg={"$secondary"} padding={20} borderRadius={8}>
          <Text fontSize={12} fontWeight={"700"}>
            {account.country.country_name}
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
