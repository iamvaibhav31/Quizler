/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Title = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.title}>Quizzler</Text>
          </View>
     );
};

const styles = StyleSheet.create({
     title: {
          fontSize: 38,
          fontWeight: '400',
          color: 'black',
     }, container: {
          paddingVertical: 16,
          justifyContent: 'center',
          alignItems: 'center',

     },
});

export default Title;