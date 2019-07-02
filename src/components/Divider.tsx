import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 5,
  }
})

const Divider: React.SFC = () => (
  <View style={styles.main} />
);

export default Divider;
