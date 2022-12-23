import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@store/users/usersSlice';
import lotReducer from '@store/lots/lotsSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    lots: lotReducer,
  },
});

export default store;
