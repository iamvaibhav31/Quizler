/* eslint-disable prettier/prettier */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuestions = createAsyncThunk('Questions/fetchQuestions', async (initialData) => {
     try {
          const { amount, diff, type } = initialData;
          const response = await axios.get(`https://opentdb.com/api.php?amount=${amount}&difficulty=${diff}&type=${type}&encode=url3986`)
          console.log(response.data)
          return response.data
     } catch (e) {
          return e.message
     }
})
