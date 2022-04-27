import { GraphRequestManager, View } from 'react-native'
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import React from 'react'
import CustomButton from '../CustomButton'
import { useNavigation } from '@react-navigation/native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';


const SocialSignInButton =  () => {
  
  GoogleSignin.configure({
    webClientId:'995012198718-ck4ep06b5tsqsp58r6727lakq4arqvce.apps.googleusercontent.com',
  })

  const navigation = useNavigation();
  
  const onSignInFacebook = async () => {
    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(facebookCredential);

      console.warn("onSignInFacebook")
      navigation.navigate('Home');
    }
    catch (error) {
      console.log({error})
    }

  }
  
  const onSignInGoogle = async () => {
    console.warn('onSignInGooglePressed')
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in.then((user) => {
      console.log(user)
      navigation.navigate('Home');

    })
      .catch((error) => {
      console.log(error)
    })

  }


  return (
    <>
      <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"  
          fgColor="#4765A9"
        />
        
      <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
      />

      
    </>
  )
}

export default SocialSignInButton