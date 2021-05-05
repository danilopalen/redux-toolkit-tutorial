import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../features/counter/contactSlice';

export default configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
