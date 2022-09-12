/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Rules = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.questions}>
                    <Text style={styles.bold}>Q.</Text>
                    <Text>What is Quizzler?</Text>
               </Text>
               <Text style={styles.answers}>
                    <Text style={styles.bold}>Ans. </Text>
                    <Text>countable noun. A quiz is a game or competition in which someone tests your knowledge by asking you questions. We'll have a quiz at the end of the show. Synonyms: competition, test, quiz show, panel game More Synonyms of quiz.</Text>
               </Text>
               <Text style={styles.questions}>
                    <Text style={styles.bold}>Q.</Text>
                    <Text>What is Rules?</Text>
               </Text>
               <Text style={styles.answers}>
                    <Text style={styles.bold}>Ans. </Text>
                    <Text>The Objective behind to organize Quiz competition is to evaluate the knowledge of the participants within academics as well as beyond academics and to make them familiar with the prospects of quizzes and the objectivity of the questions.</Text>

               </Text>
               <View style={styles.rulespointer}>
                    <Text style={styles.rules}> {'\u2B24' + ' '} No Negative Marking</Text>
                    <Text style={styles.rules}> {'\u2B24' + ' '} Evey questions contain one marks </Text>
                    <Text style={styles.rules}> {'\u2B24' + ' '} You can not press Next button until you select one options</Text>
                    <Text style={styles.rules}> {'\u2B24' + ' '} Number of Questions should Be more then five and less then 100</Text>
               </View>
          </View>
     );
};

export default Rules;

const styles = StyleSheet.create({
     container: {
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          // borderWidth: 1
     }, questions: {
          fontSize: 20,
          fontWeight: '500',
          // padding: 6,
          paddingBottom: 6,
     }, bold: {
          fontWeight: '700',
     }, answers: {
          fontSize: 18,
          paddingBottom: 6,
     }, rulespointer: {
          // width: '100%',
          // flex: 1
     }, rules: {
          fontSize: 18,

     },

});
