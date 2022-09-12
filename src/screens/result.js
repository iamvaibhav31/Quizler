/* eslint-disable prettier/prettier */
import { StyleSheet, Image, Text, TouchableOpacity, View, } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { getTotalMarks, getScoredMarks, getResults, getPerentage, cleanup } from '../features/Slice/quizSlice'
import React, { useCallback, useRef } from 'react';
// import HomeIcon from '../Assets/SVG/home.svg';
// import RetryIcon from '../Assets/SVG/retry.svg';
import BottomsheetContainer from '../Components/BottomsheetContainer';
import BottomSheet from '../Components/BottomSheet';



const Result = ({ navigation }) => {
     const dispatch = useDispatch()
     const totlemark = useSelector(getTotalMarks);
     const scoredmark = useSelector(getScoredMarks);
     const result = useSelector(getResults);
     const percentage = useSelector(getPerentage);

     const bottomSheetModalRef = useRef(null);

     const handleRetry = () => {
          dispatch(cleanup());
          navigation.navigate('QuizSetting');
     };

     const handleHome = () => {
          dispatch(cleanup());
          navigation.navigate('Home');
     };

     const handleShowanswer = useCallback((index) => {
          bottomSheetModalRef.current?.present();
          // bottomSheetModalRef.current?.snapToIndex(index);
     }, []);

     // console.log(totlemark, scoredmark, result, percentage, correctoptions);
     return (

          <BottomsheetContainer>
               <View style={styles.container}>
                    <View style={styles.resultcontainer}>
                         <View>
                              <Text style={styles.resultitle}>{result}</Text>
                         </View>

                         {result === 'Pass' && <Image source={require('../Assets/Images/trophy.png')} style={styles.banner} resizeMode="contain" />}
                         {result === 'Good Attempt' && <Image source={require('../Assets/Images/good-attempt.png')} style={styles.banner} resizeMode="contain" />}
                         {result === 'Fail' && <Image source={require('../Assets/Images/fail.png')} style={styles.banner} resizeMode="contain" />}
                         <View style={styles.resulstatement}>
                              {result === 'Pass' && <Text style={styles.resultstatementtxt}>Awesome! You Nailed It</Text>}
                              {result === 'Good Attempt' && <Text style={styles.resultstatementtxt}>Better Luck Next Time</Text>}
                              {result === 'Fail' && <Text style={styles.resultstatementtxt}>You Have To Work Hard !</Text>}
                         </View>
                         <View style={styles.resulttable}>
                              <View style={styles.resulttableitems} >
                                   <View style={styles.resulttabletextcontainer}>
                                        <Text style={styles.resulttabletext}> Score:</Text>
                                   </View>
                                   <View style={styles.resulttabletextcontainer}>
                                        <Text style={styles.resulttabletext}>{scoredmark}</Text>
                                   </View>
                              </View>
                              <View style={styles.resulttableitems}>
                                   <View style={styles.resulttabletextcontainer}>
                                        <Text style={styles.resulttabletext}> TotalMarks :</Text>
                                   </View>
                                   <View style={styles.resulttabletextcontainer}>
                                        <Text style={styles.resulttabletext}>{totlemark}</Text>
                                   </View>
                              </View>
                              <View style={styles.resulttableitems}>
                                   <View style={styles.resulttabletextcontainer}>
                                        <Text style={styles.resulttabletext}> Percentage :</Text>
                                   </View>
                                   <View style={styles.resulttabletextcontainer}>
                                        <Text style={styles.resulttabletext}>{percentage}%</Text>
                                   </View>
                              </View>

                         </View>


                         <View style={styles.btncontainer}>
                              <TouchableOpacity style={styles.btns} onPress={handleHome}>
                                   {/* <HomeIcon width={18} height={18} fill={'#FFFFFF'} /> */}
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.btns} onPress={() => handleShowanswer(0)}>
                                   <Text style={styles.btntxt}>Show Answer</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.btns} onPress={handleRetry}>
                                   {/* <RetryIcon width={18} height={18} fill={'#FFFFFF'} /> */}
                              </TouchableOpacity>
                         </View>

                         <BottomSheet bottomSheetModalRef={bottomSheetModalRef} />

                    </View>
               </View>
          </BottomsheetContainer>


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
     }, resultstatementtxt: {
          fontSize: 20,
     },

     resulttable: {
          marginTop: 6,
          margin: 10,
          marginBottom: 14,
          padding: 2,
          // borderWidth: 2

     }, resulttableitems: {
          // width: '80%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          // borderWidth: 2

     }, resulttabletext: {
          fontSize: 20,
          fontWeight: '600',
          // borderWidth: 2
     }, resulttabletextcontainer: {
          width: '50%',
          alignItems: 'center',
          padding: 6,
          // borderWidth: 2,
          marginLeft: 2,
     },

     btncontainer: {
          width: '95%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 16,
     }, btns: {
          backgroundColor: '#6f2dbd',
          padding: 12,
          paddingHorizontal: 20,
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
     }, btntxt: {
          fontSize: 20,
          fontWeight: '600',
          color: 'white',

     },

})