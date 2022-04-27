import { View, StatusBar, StyleSheet, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth';

import Navigation from './Navigation';
import FirebaseConfig from './FirebaseConfig/FirebaseConfig';

const App = () => {


  return (
    <View style={style.cotainer}>
      <StatusBar barStyle='light-content' />

      <Navigation />

    </View>
  )
}

export default App

const style = StyleSheet.create({
  cotainer: {
    flex : 1,
  },
});
