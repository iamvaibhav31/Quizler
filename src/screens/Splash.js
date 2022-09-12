/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";

const SplashScreen = ({ navigation }) => {

     useEffect(() => {
          setTimeout(() => {
               navigation.navigate('Home');
          }, 1450)
     })

     return (
          <View style={styles.container}>
               <View style={styles.spashcontainer}>
                    <Image source={require('../Assets/Images/Icon.png')} style={styles.splashicon} />
                    <Text style={styles.splashtitle}>QUIZZLER</Text>
               </View>
          </View>
     );
};

export default SplashScreen;

const styles = StyleSheet.create({
     container: {
          width: '100%',
          height: '100%',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#6f2dbd',
     },
     spashcontainer: {
          alignItems: 'center',
     }, splashicon: {
          height: 100,
          width: 100,
          marginVertical: 6,
     },
     splashtitle: {
          fontSize: 40,
          color: 'white',
          fontfamily: 'Montserrat-VariableFont_wght',
     },

});

