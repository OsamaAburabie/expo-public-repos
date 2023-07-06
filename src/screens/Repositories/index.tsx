import { ActivityIndicator } from "react-native";
import React from "react";
import RepoCard from "../../components/RepoCard";
import CustomContainer from "@components/CustomContainer";
import { Input, Stack, XStack, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { useInfiniteQuery } from "@tanstack/react-query";
import { searchRepos } from "@api/Repositories/searchRepos";
import { Repository } from "@customTypes/index";
import { FlashList } from "@shopify/flash-list";
type Props = {};

const Repositories = ({}: Props) => {
  const [query, setQuery] = React.useState("");

  const { data, isLoading, isFetching, fetchNextPage, hasNextPage } =
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
            value={query}
            onChangeText={setQuery}
            unstyled
            height={"100%"}
            f={1}
            backgroundColor={"transparent"}
            color={"$white"}
            placeholder="Search for coffee"
          />
        </XStack>

        {isLoading ? (
          <YStack f={1} jc="center" ai="center">
            <ActivityIndicator size={"large"} />
          </YStack>
        ) : (
          <FlashList
            estimatedItemSize={200}
            showsVerticalScrollIndicator={false}
            data={data?.pages.map((page) => page).flat() ?? []}
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
