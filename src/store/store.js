import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@store/users/usersSlice';
import lotReducer from '@store/lots/lotsSlice';
import orderReducer from '@store/orders/orderSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    lots: lotReducer,
    orders: orderReducer,
  },
});

export default store;
