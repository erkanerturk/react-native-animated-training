import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Loop from './src/animations/Loop';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Loop />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#94BBA9'
  }
});

export default App;
