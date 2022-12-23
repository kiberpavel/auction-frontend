import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { lotCreation } from '@api/lot';

export const createLot = createAsyncThunk(
  'lot/createLot',
  async (data, { rejectWithValue }) => {
    try {
      const response = await lotCreation(data);
      return response.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.error);
    }
  },
);

const initialState = {
  price: 0,
  shortName: '',
  description: '',
  image: null,
  hasError: false,
  message: '',
  errorMessage: '',
};

export const lotsSlice = createSlice({
  name: 'lot',
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setShortName: (state, action) => {
      state.shortName = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(createLot.pending, state => {
      state.price = '';
      state.shortName = '';
      state.description = '';
      state.image = null;
      state.hasError = false;
      state.message = '';
      state.errorMessage = '';
    });
    builder.addCase(createLot.fulfilled, (state, action) => {
      state.message = action.payload.message;
    });
    builder.addCase(createLot.rejected, (state, action) => {
      state.hasError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const { setPrice, setShortName, setDescription, setImage } =
  lotsSlice.actions;

export default lotsSlice.reducer;
