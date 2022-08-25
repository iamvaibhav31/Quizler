/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Title from '../Components/title';
//

const Home = ({ navigation }) => {
     // const Banner = ;
     return (
          <View style={styles.container}>
               <Title />
               <View style={styles.bannercontainer}>
                    <Image source={require('../src/Images/banner.png')} style={styles.banner} resizeMode="contain" />
               </View>
               <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuizSetting')} >
                    <Text style={styles.btntext} >Start</Text>
               </TouchableOpacity>
          </View>
     );
};




const styles = StyleSheet.create({
     container: {
          paddingHorizontal: 20,
          height: "100%",
     },
     banner: {
          height: 300,
          width: 300,
     },
     bannercontainer: {
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
     }, button: {
          width: '100%',
          backgroundColor: '#6f2dbd',
          padding: 16,
          borderRadius: 16,
          alignItems: 'center',
          marginBottom: 32,
     }, btntext: {
          fontSize: 18,
          fontWeight: '600',
          color: 'white',
     }
});



export default Home;
