/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

const Quiz = ({ navigation }) => {
     return (
          <View style={styles.container}>
               <View style={styles.question}>
                    <Text>Question</Text>
               </View>
               <View style={styles.option}>
                    <TouchableOpacity>
                         <Text>option 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                         <Text>option 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                         <Text>option 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                         <Text>option 4</Text>
                    </TouchableOpacity>
               </View>
               <View style={styles.bottom}>
                    <TouchableOpacity>
                         <Text>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                         <Text>Next</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Result")}>
                         <Text>End</Text>
                    </TouchableOpacity>
               </View>
          </View>
     );
};

export default Quiz;

const styles = StyleSheet.create({
     container: {
          padding: 12,
          height: '100%',

     }, question: {
          marginVertical: 16,

     }, option: {
          marginVertical: 16,
          flex: 1,

     }, bottom: {
          marginBottom: 12,
          paddingVertical: 16,
          justifyContent: 'space-between',
          flexDirection: 'row',
     },
});