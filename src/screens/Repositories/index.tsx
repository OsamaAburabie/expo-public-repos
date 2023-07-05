import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import RepoCard from "../../components/RepoCard";
import { styles, theme } from "../../constants/theme";

type Props = {};

const Repositories = ({}: Props) => {
  return (
    <View style={[styles.flex, style.container]}>
      <FlatList
        contentContainerStyle={styles.gap10}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={({ item }) => <RepoCard />}
        onEndReached={() => {
          console.log("onEndReached");
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: theme.BACKGROUND,
    paddingHorizontal: 16,
  },
});

export default Repositories;
