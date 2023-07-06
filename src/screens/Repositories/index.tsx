import { ActivityIndicator, FlatList } from "react-native";
import React from "react";
import RepoCard from "../../components/RepoCard";
import CustomContainer from "@components/CustomContainer";
import { Input, Stack, Text, XStack, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { useInfiniteQuery } from "@tanstack/react-query";
import { searchRepos } from "@api/Repositories/searchRepos";
import { Repository } from "@customTypes/index";
import debounce from "lodash.debounce";
import { styles } from "@constants/theme";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {};

const Repositories = ({}: Props) => {
  const [query, setQuery] = React.useState("");

  const { data, isLoading, isFetching, fetchNextPage, hasNextPage, isError } =
    useInfiniteQuery({
      queryKey: ["searchRepos", query],
      queryFn: ({ pageParam = 1 }) => searchRepos(query, pageParam),
      getNextPageParam: (_, pages) => {
        const currentPage = pages.length; // Track the current page using the length of received pages
        const nextPage = currentPage + 1;
        return nextPage;
      },
    });

  const onReachEnd = () => {
    if (isLoading || isFetching) return;

    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderItems = ({ item }: { item: Repository }) => {
    return <RepoCard repo={item} />;
  };

  const onQueryChange = debounce((text: string) => {
    setQuery(text);
  }, 300);

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
            onChangeText={onQueryChange}
            unstyled
            height={"100%"}
            f={1}
            backgroundColor={"transparent"}
            color={"$white"}
            placeholder="Search for repositories"
          />
        </XStack>

        {isLoading ? (
          <YStack f={1} jc="center" ai="center">
            <ActivityIndicator size={"large"} />
          </YStack>
        ) : isError ? (
          <YStack gap={10} f={1} jc="center" ai="center">
            <MaterialIcons name="error" size={50} color="gray" />
            <Text fontSize={13}>Something went wrong!</Text>
          </YStack>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data?.pages.map((page) => page).flat() ?? []}
            contentContainerStyle={styles.flexGrow}
            ListEmptyComponent={
              <YStack gap={10} f={1} jc="center" ai="center">
                <Ionicons name="search" size={50} color="gray" />
                <Text fontSize={13}>No repos found</Text>
              </YStack>
            }
            renderItem={renderItems}
            onEndReached={onReachEnd}
            ListFooterComponent={
              <YStack py={15}>{isFetching && <ActivityIndicator />}</YStack>
            }
          />
        )}
      </YStack>
    </CustomContainer>
  );
};

export default Repositories;
