import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const NewPasswordScreen = () => {

  const [Code, setCode] = useState('');
  const [NewPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  // const { height } = useWindowDimensions()
  
  const onSubmitPressed = () => {

    auth().confirmPasswordReset(Code, NewPassword).then(function (user) {
      console.log('Password Successfully Resetted!')
      navigation.navigate('SigIn')
    }).catch(function (e) {
      console.error(e)
    })

    console.warn("onConfirmPressed")
  }

  const onSignInPressed = () => {
    
    navigation.navigate('SignIn')
    console.warn("onSignInPressed")
  }

  return (
    <ScrollView>
      <View style={styles.root}>

        <Text style={styles.title}>
          Reset your Password
        </Text>

        <CustomInput placeholder='Enter your Confirmation code' value={Code} setValue={setCode} />
        
        <CustomInput placeholder='Enter your Confirmation code' value={NewPassword} setValue={setNewPassword} />

        <CustomButton text="Submit" onPress={onSubmitPressed} />
      
        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />

      </View>
    </ScrollView>
    )
}

export default NewPasswordScreen

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

