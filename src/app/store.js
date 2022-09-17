import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice';
import { useReducer } from 'react';
import movieReducer from '../features/movie/movieSlice';
export const store = configureStore({
  reducer: {
    movie:movieReducer,
    user:userSlice
  },
});
