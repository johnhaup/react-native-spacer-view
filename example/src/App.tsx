import React from 'react';

import {
  FlatList,
  ImageBackground,
  ListRenderItemInfo,
  StyleSheet,
  Text,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Spacer } from 'react-native-spacer-view';
import {
  BASE_UNIT,
  DEFAULT_PADDING,
  IMG_ASPECT_RATIO,
  ITEMS,
  type Item,
} from './constants';

function ListHeader() {
  return (
    <>
      <Spacer safeTop height={DEFAULT_PADDING} />
      <Text style={styles.listHeader}>Cool Bandz List</Text>
      <Spacer height={BASE_UNIT} />
    </>
  );
}

export default function App() {
  const renderItem = ({ item }: ListRenderItemInfo<Item>) => (
    <ImageBackground style={styles.itemContainer} source={{ uri: item.image }}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </ImageBackground>
  );

  const renderSeparator = () => <Spacer height={DEFAULT_PADDING} />;

  return (
    <SafeAreaProvider>
      <FlatList
        style={styles.container}
        data={ITEMS}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={<ListHeader />}
        ListFooterComponent={<Spacer safeBottom height={DEFAULT_PADDING * 2} />}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: DEFAULT_PADDING,
  },
  itemContainer: {
    alignSelf: 'stretch',
    aspectRatio: IMG_ASPECT_RATIO,
    borderRadius: BASE_UNIT,
    padding: DEFAULT_PADDING,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  listHeader: {
    fontSize: 32,
    fontWeight: '800',
  },
  title: {
    color: 'white',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    letterSpacing: -0.05,
    lineHeight: 24,
  },
});
