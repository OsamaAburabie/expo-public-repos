import React from "react";
import { Repository } from "../../types";
import { theme } from "../../constants/theme";
import { Image, Text, XStack, YStack } from "tamagui";

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
    >
      <Text fontSize={13} fontWeight={"700"}>
        Repo NAME
      </Text>
      <XStack gap={4} marginVertical={8} alignItems="center">
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/4?v=4",
          }}
          height={18}
          width={18}
          borderRadius={9}
        />
        <Text fontSize={12}>path/repo name</Text>
      </XStack>

      <Text fontSize={12}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quisquam Lorem ipsum dolor
      </Text>

      <XStack justifyContent="space-between" marginVertical={10}>
        <Text fontSize={12}>⭐️ 100</Text>
        <Text fontSize={12}>⚠️ 100</Text>
        <Text fontSize={12}>🍴 100</Text>
      </XStack>
    </YStack>
  );
};

export default RepoCard;
