import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Spacer } from 'react-native-spacer-view';

export default function App() {
  return (
    <View style={styles.container}>
      <Spacer safeTop style={styles.red} />
      <Text>I am right below the safe area top.</Text>
      <Spacer flex />
      <Text>I am 24 px above the safe area bottom.</Text>
      <Spacer safeBottom height={24} style={styles.red} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    backgroundColor: 'red',
  },
});
