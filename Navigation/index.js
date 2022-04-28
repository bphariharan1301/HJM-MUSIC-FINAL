
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignInScreen/SignIn'
import SignUp from '../screens/SignUpScreen/SignUp'
import ConfirmEmail from '../screens/ConfirmEmailScreen/ConfirmEmail';
import ForgotPassword from '../screens/ForgotPasswordScreen/ForgotPassword';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import MusicPlayer from '../screens/MusicPlayerScreen/MusicPlayer'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';


import FirebaseConfig from '../FirebaseConfig/FirebaseConfig';


const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >

        <Stack.Screen name='FirebaseConfig' component={FirebaseConfig} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmail} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        {/* <Stack.Screen name='NewPasswordScreen' component={NewPasswordScreen} /> */}
        <Stack.Screen name='MusicPlayer' component={MusicPlayer} />
        {/* <Stack.Screen name='DashboardScreen' component={DashboardScreen} /> */}
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation