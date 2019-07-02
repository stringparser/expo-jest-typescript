import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  main: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const Container: React.SFC = ({ children }) => (
  <View style={styles.main}>
    {children}
  </View>
);

export default Container;
