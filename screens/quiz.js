/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectAllQuizs, getNoOfQuestions, getStatus, increment, result, correctoptions } from '../features/Slice/quizSlice'
import RightSvg from '../src/SVG/right-tick.svg'
const Quiz = ({ navigation }) => {

     const dispatch = useDispatch()
     const [number, setNumber] = useState(0);
     const [ans, setAns] = useState('');
     const [opts, setOpts] = useState([])
     const status = useSelector(getStatus);
     const questions = useSelector(selectAllQuizs);

     console.log(questions)
     const noofquestions = useSelector(getNoOfQuestions);

     function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
               const j = Math.floor(Math.random() * (i + 1));
               [array[i], array[j]] = [array[j], array[i]];
          }
          return array
     }

     useEffect(() => {
          if (status !== 'loading') {
               setOpts(shuffleArray([...questions[number].incorrect_answers, questions[number].correct_answer]))
               dispatch(correctoptions({
                    ques_no: number + 1,
                    correct_answer: questions[number].correct_answer,
               }))
          } else {
               setOpts([])
          }
     }, [dispatch, questions, number, status]);


     const handleSkip = () => {
          if (number + 1 === noofquestions) {
               navigation.navigate('Result');
          } else {
               setNumber(number + 1);
          }
          setAns("");
     };

     // {
     // ques_no: action.payload.num + 1,
     //  correct_answer: state.Q[action.payload.num].correct_answer,
     // }
     const handleNext = () => {
          if (ans !== '') {
               if (ans === questions[number].correct_answer) {
                    dispatch(increment());
               }

               setNumber(number + 1);
               setAns("");
          }
     };


     const haandleEnd = () => {
          if (ans !== '') {
               if (ans === questions[number].correct_answer) {
                    dispatch(increment());
               }
               dispatch(result());
               navigation.navigate('Result');
          }
     };



     const renderOptions = ({ item }) => (
          <TouchableOpacity style={styles.opnbtn} onPress={() => { setAns(item); }}>
               {ans === item && <View style={styles.opnwithselector}>
                    <View></View>
                    <View>
                         <Text style={styles.option}>{decodeURIComponent(item)}</Text>
                    </View>
                    <View style={styles.opnselector}>
                         <RightSvg width={15} height={18} />
                    </View>
               </View>}

               {ans !== item && <View style={styles.opnwithoutselector}>
                    <View>
                         <Text style={styles.option}>{decodeURIComponent(item)}</Text>
                    </View>
               </View>}

          </TouchableOpacity >
     );

     return (
          <View style={styles.container}>
               {status === 'loading' && <View style={styles.loading}>
                    <ActivityIndicator size="large" />
               </View>}
               {status !== 'loading' && (
                    <View style={styles.parent}>
                         {questions && (<View style={styles.parent}>
                              <View style={styles.question}>
                                   <Text style={styles.questxt}>Q{number + 1}. {decodeURIComponent(questions[number]?.question)}</Text>
                              </View>
                              <View style={styles.options}>
                                   <FlatList
                                        data={opts}
                                        renderItem={renderOptions}
                                        keyExtractor={item => item}
                                   />
                              </View>
                              <View style={styles.bottom}>
                                   <TouchableOpacity style={styles.btns} onPress={() => handleSkip()}>
                                        <Text style={styles.btntxt}>SKIP</Text>
                                   </TouchableOpacity>
                                   {number + 1 !== noofquestions && <TouchableOpacity style={styles.btns} onPress={() => handleNext()}>
                                        <Text style={styles.btntxt}>NEXT</Text>
                                   </TouchableOpacity>}

                                   {number === noofquestions - 1 && <TouchableOpacity style={styles.btns} onPress={() => haandleEnd()}>
                                        <Text style={styles.btntxt}>END</Text>
                                   </TouchableOpacity>}


                              </View>
                         </View>)}
                    </View>
               )}


          </View>

     );
};

export default Quiz;

const styles = StyleSheet.create({
     container: {
          padding: 6,
          paddingHorizontal: 20,
          height: "100%",

     },
     loading: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center'
     },
     parent: {
          height: '100%',

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
          paddingHorizontal: 12,
          marginVertical: 6,
          backgroundColor: "#B8D0EB",
          borderRadius: 15,
     }, opnwithoutselector: {
          alignItems: 'center',
     }, opnwithselector: {
          justifyContent: 'space-between',
          flexDirection: 'row',
     }, opnselector: {
          justifyContent: 'center',
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