import React from "react";
import { Repository } from "../../types";
import { Text, XStack, YStack } from "tamagui";
import { Image } from "expo-image";
import { Linking, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  repo: Repository;
};

const RepoCard = ({ repo }: Props) => {
  const onPress = () => {
    Linking.openURL(repo.html_url);
  };

  return (
    <TouchableOpacity onPress={onPress}>
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
    </TouchableOpacity>
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
