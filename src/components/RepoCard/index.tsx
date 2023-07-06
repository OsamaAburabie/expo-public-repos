import React from "react";
import { Repository } from "../../types";
import { Text, XStack, YStack } from "tamagui";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
  repo: Repository;
};

const RepoCard = ({ repo }: Props) => {
  return (
    <YStack
      backgroundColor={"$secondary"}
      paddingHorizontal={16}
      paddingVertical={8}
      borderRadius={8}
      mb={8}
    >
      <Text fontSize={13} fontWeight={"700"}>
        {repo.name}
      </Text>
      <XStack gap={4} marginVertical={8} alignItems="center">
        <Image
          source={{
            uri: repo.owner.avatar_url,
          }}
          style={styles.avatar}
        />
        <Text fontSize={12}>{repo.full_name}</Text>
      </XStack>

      <Text fontSize={12}>{repo.description}</Text>

      <XStack justifyContent="space-between" marginVertical={10}>
        <Text fontSize={12}>⭐️ {repo.stargazers_count}</Text>
        <Text fontSize={12}>⚠️ {repo.open_issues_count}</Text>
        <Text fontSize={12}>🍴 {repo.forks_count}</Text>
      </XStack>
    </YStack>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 18,
    width: 18,
    borderRadius: 9,
  },
});
export default RepoCard;
