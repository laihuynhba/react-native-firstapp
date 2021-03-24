import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './List';
import PresentationalComponent from './PresentationalComponent';

const Home = (props) => {
  return (
    // <View style={styles.container}>
    //   <View style={styles.redbox} />
    //   <View style={styles.bluebox} />
    //   <View style={styles.blackbox} />
    // </View>
    <List />
  )
}

export default Home

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
