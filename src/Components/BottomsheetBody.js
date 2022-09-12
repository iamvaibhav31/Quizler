/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import React from "react";
import { getCorrectoptins } from '../features/Slice/quizSlice'
import Title from './title'
const BottomsheetContainer = () => {
     const correctoptions = useSelector(getCorrectoptins);

     return (
          <View>
               <Title title={'Correct Answer'} />
               <ScrollView>
                    <View style={styles.row}>
                         {correctoptions.map((item) => (
                              <View key={item.ques_no} style={styles.Anscontainer}>
                                   <Text style={styles.Quesnotxt}>Q{item.ques_no}</Text>
                                   <View style={styles.separator} />
                                   <Text style={styles.Correctanswertxt}>{decodeURIComponent(item.correct_answer)}</Text>
                              </View>
                         ))}
                    </View>
               </ScrollView>

          </View>
     );
};

export default BottomsheetContainer;

const styles = StyleSheet.create({
     row: {
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
     },
     correctAns: {
          fontSize: 20,
          fontWeight: '600',
          color: 'white',
     }, Anscontainer: {
          paddingVertical: 10,
          paddingHorizontal: 14,
          marginVertical: 4,
          marginHorizontal: 5,
          backgroundColor: '#B8D0EB',
          borderRadius: 15,
          flexDirection: 'row',
     }, Quesnotxt: {
          fontSize: 15,
          fontWeight: '600',
     }, separator: {
          width: 2,
          height: 20,
          borderRadius: 6,
          backgroundColor: '#00000048',
          marginHorizontal: 4,
     }, Correctanswertxt: {
          fontSize: 15,
          fontWeight: '600',
     },
});
