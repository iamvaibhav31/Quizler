/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Title from '../Components/title';
// { navigation }onPress={() => navigation.navigate("Quiz")}

const Home = () => {
     // const Banner = ;
     return (
          <View style={styles.container}>
               <Title />
               <View style={styles.bannercontainer}>
                    <Image source={require('../src/Images/banner.png')} style={styles.banner} resizeMode="contain" />
               </View>
               <TouchableOpacity style={styles.button} >
                    <Text>Start</Text>
               </TouchableOpacity>
          </View>
     );
};




const styles = StyleSheet.create({
     container: {
          paddingHorizontal: 20,
     },
     banner: {
          height: 300,
          width: 300,
     },
     bannercontainer: {
          justifyContent: 'center',
          alignItems: 'center',
     }, button: {
          width: '100%',
          backgroundColor: '#6f2dbd',
          padding: 20,
          borderRadius: 16,
     }
});



export default Home;
