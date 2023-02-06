import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { orderSet, orderListForUser, orderPay } from '@api/order';

export const addOrder = createAsyncThunk(
  'order/addOrder',
  async (data, { rejectWithValue }) => {
    try {
      const response = await orderSet(data);
      return response.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.error);
    }
  },
);

export const userOrders = createAsyncThunk(
  'order/userOrders',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await orderListForUser(userId);
      return response.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.error);
    }
  },
);

export const payOrders = createAsyncThunk(
  'order/payOrders',
  async (data, { rejectWithValue }) => {
    try {
      const response = await orderPay(data);
      return response.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.error);
    }
  },
);

const initialState = {
  message: '',
  hasError: false,
  errorMessage: '',
  time: null,
  count: 0,
  userOrders: {},
  totalSum: 0,
  ordersId: {},
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setHasError: (state, action) => {
      state.hasError = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setUserOrders: (state, action) => {
      state.userOrders = action.payload;
    },
    setTotalSum: (state, action) => {
      state.totalSum = action.payload;
    },
    setOrdersId: (state, action) => {
      state.ordersId = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.message = action.payload.message;
    });
    builder.addCase(addOrder.rejected, (state, action) => {
      state.errorMessage = action.payload;
    });
    builder.addCase(userOrders.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.userOrders = action.payload.data;
    });
    builder.addCase(payOrders.fulfilled, (state, action) => {
      state.message = action.payload.message;
    });
  },
});

export const {
  setMessage,
  setHasError,
  setErrorMessage,
  setTime,
  setCount,
  setUserOrders,
  setTotalSum,
  setOrdersId,
} = orderSlice.actions;
export default orderSlice.reducer;
