/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { fetchQuestions } from '../features/Api/QuizRequest';
import { cleanup } from '../features/Slice/quizSlice';
import Dropdown from '../Components/Dropdown';
import React, { useState } from 'react';
import Title from '../Components/title';
import Rules from '../Components/Rules';

const questionstype = [
     {
          value: 'multiple',
          lable: 'Multiple Choice',

     },
     {
          value: 'boolean',
          lable: 'True / False',

     }
];
const questionsdifficulty = [
     {
          value: 'easy',
          lable: 'Easy',

     },
     {
          value: 'medium',
          lable: 'Medium',

     }, {
          value: 'hard',
          lable: 'Hard',

     }
];

const Setting = ({ navigation }) => {
     const dispatch = useDispatch();

     const [type, setType] = useState('multiple');
     const [difficulty, setDifficulty] = useState('easy');
     const [noofquestions, setNoOfQuestions] = useState(0);


     const handleonPress = () => {
          dispatch(cleanup());
          if (noofquestions >= 5) {
               dispatch(fetchQuestions({ amount: noofquestions, diff: difficulty, type: type }));
               navigation.navigate('Quiz');
          }
     }


     return (
          <View style={styles.container}>
               <View style={styles.settings}>
                    <Title title={'Welcome To Quizzler'} />
                    <Rules />
                    <View style={styles.diffsettings}>
                         <TextInput style={styles.input} placeholder="No. Of Questions" onChangeText={newText => setNoOfQuestions(newText)}
                              value={noofquestions} />

                         <View style={styles.dropdowncon}>
                              <Dropdown data={questionstype} currentvalue={'multiple'} onchangefun={(e) => setType(e.value)} />
                              <Dropdown data={questionsdifficulty} currentvalue={'easy'} onchangefun={(e) => setDifficulty(e.value)} />
                         </View>


                         <TouchableOpacity style={styles.button} onPress={handleonPress}>
                              <Text style={styles.btntext} >Submit</Text>
                         </TouchableOpacity>
                    </View>

               </View>
          </View >
     );
};

// onchangefun={()}

export default Setting;

const styles = StyleSheet.create({
     container: {
          height: '100%',
          width: '100%',

     }, settings: {
          borderWidth: 1,
          height: '100%',

     }, diffsettings: {
          padding: 10,
          margin: 8,
          marginTop: 10,

     }, dropdowncon: {
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',

     }, button: {
          width: '100%',
          backgroundColor: '#6f2dbd',
          padding: 14,
          borderRadius: 16,
          paddingLeft: 18,
          paddingRight: 18,
          alignItems: 'center',

     }, btntext: {
          fontSize: 18,
          fontWeight: '600',
          color: 'white',

     }, input: {
          width: '100%',
          borderWidth: 1,
          padding: 8,
          borderRadius: 16,
     }
});
