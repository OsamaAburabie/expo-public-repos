import { FlatList, StyleSheet } from "react-native";
import React from "react";
import RepoCard from "../../components/RepoCard";
import { styles, theme } from "../../constants/theme";
import CustomContainer from "@components/CustomContainer";
import { Input, Stack, XStack, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
type Props = {};

const Repositories = ({}: Props) => {
  return (
    <CustomContainer noScrollView>
      <YStack f={1}>
        <XStack
          my={20}
          height={52}
          borderRadius={16}
          backgroundColor={"$secondary"}
          ai={"center"}
          jc={"space-between"}
        >
          <Stack height={52} width={52} jc="center" ai="center">
            <Ionicons name="search" size={24} color="gray" />
          </Stack>

          <Input
            unstyled
            height={"100%"}
            f={1}
            backgroundColor={"transparent"}
            color={"$white"}
            placeholder="Search for coffee"
          />
        </XStack>

        <FlatList
          contentContainerStyle={styles.gap10}
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({ item }) => <RepoCard />}
          onEndReached={() => {
            console.log("onEndReached");
          }}
          ListFooterComponent={<YStack height={1} />}
        />
      </YStack>
    </CustomContainer>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: theme.BACKGROUND,
    paddingHorizontal: 16,
  },
});

export default Repositories;
