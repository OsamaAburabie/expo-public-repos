import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Repository} from '../../types';
import {theme} from '../../constants/theme';

type Props = {
  repo: Repository;
};

const RepoCard = ({repo}: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.repoName}>Repo NAME</Text>
      <View style={styles.repoInfo}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/4?v=4',
          }}
          style={styles.repoAvatar}
        />
        <Text style={styles.repoPath}>path/repo name</Text>
      </View>

      <Text style={styles.repoDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quisquam Lorem ipsum dolor
      </Text>

      <View style={styles.repoStats}>
        <Text>⭐️ 100</Text>
        <Text>⚠️ 100</Text>
        <Text>🍴 100</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: theme.CARD_BACKGROUND,
    borderRadius: 8,
  },
  repoName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  repoInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginVertical: 8,
  },
  repoAvatar: {width: 18, height: 18, borderRadius: 9},
  repoPath: {
    fontSize: 12,
  },
  repoDescription: {
    fontSize: 12,
  },

  repoStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
});

export default RepoCard;
