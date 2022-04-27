import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

// Firebase Auth
import auth from '@react-native-firebase/auth';

const SignUp = () => {

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation()

  const { height } = useWindowDimensions()
  
  const onRegisterPressed = () => {

    // Validation of User
    
    console.log('Name: ', name)
    console.log('Email: ', email)
    
    console.log('Password: ', password)

    auth().createUserWithEmailAndPassword(email, password).then(() => {
      console.log('User account created & signed in!')
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });

    navigation.navigate('ProfileScreen');
    // navigation.navigate('Home');
    
    console.warn("onRegisterPressed")
  }

  const onSignInPressed = () => {

    // Navigation part

    navigation.navigate('Home');

    console.warn("onSignInPressed")
  }

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed')
  }

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed')
  }

  return (
    <ScrollView>
      <View style={styles.root}>

        <Text style={styles.title}>
          Create an account
        </Text>

        {/* <CustomInput placeholder='Name' value={name} setValue={setname} /> */}
        <CustomInput placeholder='Email' value={email} setValue={setemail} />
        <CustomInput placeholder='Password' value={password} setValue={setPassword} setSecureTextEntry/>
        <CustomInput placeholder='Confirm Password' value={passwordRepeat} setValue={setPasswordRepeat} setSecureTextEntry/>

        <CustomButton text="Register" onPress={onRegisterPressed} />
        
        <Text style={styles.text}>
          By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed} > Terms of Use </Text> and <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy. </Text> 
        </Text>

        <SocialSignInButton />

        
        <CustomButton
          text="Have an account? Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />

      </View>
    </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9FBFC'
  },
  logo: {
    width: '30%',
    maxWidth: 500,
    maxHeight: 200,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin:10,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },

  link: {
    color:'#FDB075',  
  },
});

