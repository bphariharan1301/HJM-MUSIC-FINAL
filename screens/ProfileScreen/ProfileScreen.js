import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useNavigation } from '@react-navigation/native';

// Firebase Auth
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {

  const [name, setName] = useState('');
 
  const navigation = useNavigation()

  const { height } = useWindowDimensions()
  
  const onUpdatePressed = () => {

    // Validation of User

    // const user = null;

    // console.log(typeof (user));

    console.log(typeof(name))

    const user = auth().currentUser
        // [END createwithemail]
        // callSomeFunction(); Optional
        // var user = firebase.auth().currentUser;
      
    user.updateProfile
    ({
      displayName: name,
    }).then(function () {
      console.log('Update Sucess!')
      console.log('Your Entered Name is: ', user.displayName)
      // navigation.navigate('Home')
    }, function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
         
          console.error(errorCode);
          console.error(errorMessage);
          // [END_EXCLUDE]
        });
    
    navigation.navigate('Home')
    console.warn("onUpdatePressed")
  }

  return (
    <ScrollView>
      <View style={styles.root}>

        <Text style={styles.title}>
          Update Your Profile
        </Text>

        <CustomInput placeholder='Full Name' value={name} setValue={setName} />

        <CustomButton text="Update" onPress={onUpdatePressed} />


      </View>
    </ScrollView>
    )
}

export default ProfileScreen

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

