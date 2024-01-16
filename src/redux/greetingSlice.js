import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:3000/api/random_greeting';

export const getGreeting = createAsyncThunk(
  'greeting/getGreeting',
  async (thunkAPI) => {
    try {
      const res = await axios.get(apiUrl);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  greeting: '',
  isLoading: true,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getGreeting.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.greeting = action.payload.greeting;
      })
      .addCase(getGreeting.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
