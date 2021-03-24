import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inputs from './inputs';
import List from './List';
import PresentationalComponent from './PresentationalComponent';
import ScrollViewExample from './ScrollView';

const App = () => {
  return (
    // <View style={styles.container}>
    //   <View style={styles.redbox} />
    //   <View style={styles.bluebox} />
    //   <View style={styles.blackbox} />
    // </View>
    // <List />
    // <Inputs />
    <ScrollViewExample />
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'grey',
    height: 600
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  }
})
