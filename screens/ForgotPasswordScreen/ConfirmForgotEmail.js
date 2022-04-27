import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';




const ConfirmEmail = () => {

  const [Email, setEmail] = useState('');

  const navigation = useNavigation();


  const { height } = useWindowDimensions()
  
  const onConfirmPressed = () => {

    

    const user = auth().currentUser

    console.warn("onConfirmPressed")
  }

  const onSignInPressed = () => {

    navigation.navigate('SigIn')

    console.warn("onSignInPressed")
  }

  const onResendCodePressed = () => {
    console.warn('onResendCodePressed')
  }

  return (
    <ScrollView>
      <View style={styles.root}>

        <Text style={styles.title}>
          Confirm Your Email
        </Text>

        <CustomInput placeholder='Enter your Email' value={Email} setValue={setEmail} />

        <CustomButton text="Confirm Email" onPress={onConfirmPressed} />
        
        <CustomButton
          text="Resend Code"
          onPress={onResendCodePressed}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />

      </View>
    </ScrollView>
    )
}

export default ConfirmEmail

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

