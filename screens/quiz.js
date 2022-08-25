/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectAllQuizs, getNoOfQuestions } from '../features/Slice/quizSlice'

const Quiz = ({ navigation }) => {
     const [number, setNumber] = useState(0);
     const questions = useSelector(selectAllQuizs);
     const noofquestions = useSelector(getNoOfQuestions);

     return (
          <View style={styles.container}>
               <View style={styles.question}>
                    <Text style={styles.questxt}>Q. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, at! Expedita earum facilis quaerat obcaecati exercitationem quia necessitatibus veniam impedit dolore eaque? Excepturi aliquid sed ab quam sapiente rem provident?</Text>
               </View>
               <View style={styles.options}>
                    <TouchableOpacity style={styles.opnbtn}>
                         <Text style={styles.option}>option 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.opnbtn}>
                         <Text style={styles.option}>option 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.opnbtn}>
                         <Text style={styles.option}>option 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.opnbtn}>
                         <Text style={styles.option}>option 4</Text>
                    </TouchableOpacity>
               </View>
               <View style={styles.bottom}>
                    <TouchableOpacity style={styles.btns}>
                         <Text style={styles.btntxt}>SKIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btns}>
                         <Text style={styles.btntxt}>NEXT</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.btns} onPress={() => navigation.navigate("Result")}>
                         <Text style={styles.btntxt}>END</Text>
                    </TouchableOpacity> */}
               </View>
          </View>
     );
};

export default Quiz;

const styles = StyleSheet.create({
     container: {
          padding: 6,
          paddingHorizontal: 20,
          height: "100%",

     }, question: {
          marginVertical: 16,

     }, questxt: {
          fontSize: 22,
     },
     options: {
          marginVertical: 16,
          flex: 1,

     }, option: {
          fontSize: 20,
          fontWeight: '600',
          color: 'white',
     }, opnbtn: {
          paddingVertical: 12,
          marginVertical: 6,
          backgroundColor: "#B8D0EB",
          borderRadius: 15,
          alignItems: 'center',
     },
     bottom: {
          marginBottom: 12,
          paddingVertical: 16,
          justifyContent: 'space-between',
          flexDirection: 'row',
     }, btns: {
          backgroundColor: '#6f2dbd',
          padding: 12,
          paddingHorizontal: 20,
          borderRadius: 16,
          alignItems: 'center',
          marginBottom: 32,

     }, btntxt: {
          fontSize: 18,
          fontWeight: '600',
          color: 'white',

     },
});