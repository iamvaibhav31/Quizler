/* eslint-disable prettier/prettier */
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { getTotalMarks, getScoredMarks, getResults, getPerentage, getCorrectoptins } from '../features/Slice/quizSlice'
import React from 'react'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const Result = () => {
     const totlemark = useSelector(getTotalMarks);
     const scoredmark = useSelector(getScoredMarks);
     const result = useSelector(getResults);
     const percentage = useSelector(getPerentage);
     const correctoptions = useSelector(getCorrectoptins);
     console.log(totlemark, scoredmark, result, percentage, correctoptions);
     return (
          <View style={styles.container}>
               <View style={styles.resultcontainer}>
                    <View>
                         <Text style={styles.resultitle}>{result}</Text>
                    </View>
                    {result === "Pass" && <Image source={require('../src/Images/trophy.png')} style={styles.banner} resizeMode="contain" />}
                    {result === "Good Attempt" && <Image source={require('../src/Images/good-attempt.png')} style={styles.banner} resizeMode="contain" />}
                    {result === "Fail" && <Image source={require('../src/Images/fail.png')} style={styles.banner} resizeMode="contain" />}
                    <View style={styles.resulstatement}>
                         {result === "Pass" && <Text style={styles.resultstatementtxt}>awesome! You Nailed It</Text>}
                         {result === "Good Attempt" && <Text style={styles.resultstatementtxt}>Better Luck Next Time</Text>}
                         {result === "Fail" && <Text style={styles.resultstatementtxt}>You Have To Work Hard !</Text>}
                    </View>

                    <View style={styles.btncontainer}>
                         <TouchableOpacity style={styles.btns}>
                              <Text style={styles.btntxt}>Home</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.btns} >
                              <Text style={styles.btntxt}>Show Answer</Text>
                         </TouchableOpacity>
                    </View>
               </View>
          </View>
     )
}

export default Result

const styles = StyleSheet.create({
     container: {
          width: '100%',
          height: '100%',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
     }, resultcontainer: {
          width: '100%',
          alignItems: 'center',
          // borderColor: '#FF3D00',
          // borderWidth: 5,

     }, resultitle: {
          fontSize: 20,
          fontWeight: '400',
          color: 'black',
          textTransform: 'uppercase',
     },
     banner: {
          height: 350,
          width: 350,
     }, resulstatement: {
          alignItems: 'center',
     }, bold: {
          fontWeight: 'bold',
     }, resultstatementtxt: {
          fontSize: 20,
     },

     btncontainer: {
          width: '80%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 16,
     }, btns: {
          backgroundColor: '#6f2dbd',
          padding: 12,
          paddingHorizontal: 20,
          borderRadius: 16,
          alignItems: 'center',
     }, btntxt: {
          fontSize: 18,
          fontWeight: '600',
          color: 'white',

     },

})