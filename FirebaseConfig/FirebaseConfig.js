import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import auth from '@react-native-firebase/auth';

import SignIn from '../screens/SignInScreen/SignIn';
// import { initializeApp } from "@reafirebase/app";

import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import SignUp from '../screens/SignUpScreen/SignUp';

const FirebaseConfig = () => {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <SignIn />
      </View>
    );
  }

    return (
      <View>
        <HomeScreen />
      </View>
    );
}



export default FirebaseConfig