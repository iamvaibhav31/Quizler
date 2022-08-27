/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit'
import { fetchQuestions } from '../Api/QuizRequest'
const initialState = {
     Q: [],
     status: 'idle', // idle | loading | successful | failed
     error: null,
     correctoptions: [],
     TotalMarks: 0,
     Marks: 0,
     Result: 'Not Attempt',  //Not attempt|| pass || good attempt || fail 
     Percentage: 0,
};


export const quizSlice = createSlice({
     name: 'Questions',
     initialState,
     reducers: {
          increment: (state) => {
               state.Marks += 1;
          },
          result: (state) => {
               state.Percentage = (state.Marks / state.TotalMarks) * 100;

               if (state.Percentage > 80) {
                    state.Result = 'Pass';
               } else if (state.Percentage < 80 && state.Percentage > 60) {
                    state.Result = 'Good Attempt';
               } else {
                    state.Result = 'Fail';
               }
          },
          correctoptions: (state, action) => {
               state.correctoptions.push(action.payload);
          },
          cleanup: (state) => {
               state.Q = [];
               state.status = 'idle'; // idle | loading | successful | failed
               state.error = null;

               state.TotalMarks = 0;
               state.Marks = 0;
               state.Result = 'Not Attempt';  //Not attempt|| pass || good attempt || fail 
               state.Percentage = 0;
          }

     },
     extraReducers(builder) {
          builder
               .addCase(fetchQuestions.pending, (state, action) => {
                    state.status = 'loading';
               })
               .addCase(fetchQuestions.fulfilled, (state, action) => {
                    state.status = 'successful';
                    state.Q = action.payload.results;
                    state.TotalMarks = state.Q.length;

               })
               .addCase(fetchQuestions.rejected, (state, action) => {
                    state.status = 'failed';
                    state.Q = [];
                    state.error = action.error.message;
               })

     }
})


export const { increment, result, correctoptions } = quizSlice.actions;
export const selectAllQuizs = state => state.Quizs.Q;
export const getStatus = state => state.Quizs.status;
export const getError = state => state.Quizs.error;
export const getNoOfQuestions = state => state.Quizs.TotalMarks;
export const getTotalMarks = state => state.Quizs.TotalMarks;
export const getScoredMarks = state => state.Quizs.Marks;
export const getResults = state => state.Quizs.Result;
export const getPerentage = state => state.Quizs.Percentage;
export const getCorrectoptins = state => state.Quizs.correctoptions;
export default quizSlice.reducer;