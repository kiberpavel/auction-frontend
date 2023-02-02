import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { orderSet } from '@api/order';

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

const initialState = {
  message: '',
  hasError: false,
  errorMessage: '',
  time: null,
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
  },
  extraReducers: builder => {
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.message = action.payload.message;
    });
    builder.addCase(addOrder.rejected, (state, action) => {
      state.errorMessage = action.payload;
    });
  },
});

export const { setMessage, setHasError, setErrorMessage, setTime } =
  orderSlice.actions;
export default orderSlice.reducer;
