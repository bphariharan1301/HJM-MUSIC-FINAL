import { View, Text, StyleSheet, Pressable, Image, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/img/logo.png';
import Tamil from '../../assets/img/tamil.png';
import Telugu from '../../assets/img/telugu.png';
import Hindi from '../../assets/img/hindi.png';
import English from '../../assets/img/english.png';
import Kanada from '../../assets/img/kanada.png';


const HomeScreen = () => {


  const navigation = useNavigation();
  const user = auth().currentUser

  const onSignOutPressed = () => {

    auth()
      .signOut()
      .then(() => navigation.navigate('SignIn') );

    console.warn('onSignOutPressed')
  }

  const onThumbnail = () => {

    console.warn('onThumbnailPressed')
    navigation.navigate('MusicPlayer')
  }

  return (
      <ScrollView>
        <View style={styles.container} >

          <View style={styles.home_container}>
            <Text style={styles.title}  >
              {user.displayName}
            </Text>
            <Pressable
            onPress={onSignOutPressed}
            style={[
              styles.buttoncontainer
              ]}>
              
              <Text style={styles.text}>
                Sign Out
              </Text>

            </Pressable>
          </View>

          <View style={styles.thumbnail_container} >

            <Pressable onPress={onThumbnail} >

              <Image source={Tamil} style={styles.thumbnail} />
              <Text style={styles.thumbnail_title}>
                  Tamil
              </Text>

            </Pressable>

            <Pressable onPress={onThumbnail}>
              <Image source={Telugu} style={styles.thumbnail} />
              <Text style={styles.thumbnail_title}>
                  Telugu
              </Text>
            </Pressable>

            <Pressable onPress={onThumbnail}>
              <Image source={Hindi} style={styles.thumbnail} />
              <Text style={styles.thumbnail_title}>
                  Hindi
              </Text>
            </Pressable>
            
            <Pressable onPress={onThumbnail}>
              <Image source={English} style={styles.thumbnail} />
              <Text style={styles.thumbnail_title}>
                  English
              </Text>
            </Pressable>

            <Pressable onPress={onThumbnail} >
              <Image source={Kanada} style={styles.thumbnail} />
              <Text style={styles.thumbnail_title}>
                  Kanada
              </Text>
            </Pressable>
          </View>

        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#222831',
    height:'100%',
  },

  home_container: {
    flexDirection:'row',
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomColor:'#393E46',
    borderWidth: 1,
    paddingBottom: 20,
    paddingTop: 10,
  },

  title: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    justifyContent:'center',
    paddingBottom: 15,
    paddingTop: 15,
  },

  buttoncontainer: {
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#3B71F3',
    height: '82%',
    width: '25%',
    paddingBottom: 10,
  },

  text: {
    paddingTop:10,
    fontWeight: 'bold',
    color:'white',
  },

  thumbnail_container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',  
  },
  
  thumbnail: {
    borderRadius: 15,
    marginBottom: 5,
  },
  
  thumbnail_title: {
    color:'#FFFF',
    fontSize: 18,
    marginBottom: 20, 
    textAlign:'center'
  },

});


export default HomeScreen