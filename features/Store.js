/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit'
import quizSlice from './Slice/quizSlice';
export default configureStore({
     reducer: {
          Quizs: quizSlice,
     },
});
