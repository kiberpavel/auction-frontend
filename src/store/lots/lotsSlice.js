import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { lotCreation, lotList, lotDelete, lotUpdate } from '@api/lot';

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

export const listOfLots = createAsyncThunk(
  'lot/listOfLots',
  async (_, { rejectWithValue }) => {
    try {
      const response = await lotList();
      return response.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.error);
    }
  },
);

export const deleteLot = createAsyncThunk(
  'lot/deleteLot',
  async (data, { rejectWithValue }) => {
    try {
      const response = await lotDelete(data);
      return response.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.error);
    }
  },
);

export const editLot = createAsyncThunk(
  'lot/editLot',
  async (data, { rejectWithValue }) => {
    try {
      const response = await lotUpdate(data);
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
  lots: {},
  listOfLotsStatus: false,
  status: '',
  id: '',
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
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setHasErrors: (state, action) => {
      state.hasError = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
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
    builder.addCase(listOfLots.fulfilled, (state, action) => {
      state.lots = action.payload;
      state.listOfLotsStatus = true;
    });
    builder.addCase(editLot.fulfilled, (state, action) => {
      state.message = action.payload.message;
    });
    builder.addCase(editLot.rejected, (state, action) => {
      state.hasError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const {
  setPrice,
  setShortName,
  setDescription,
  setImage,
  setStatus,
  setId,
  setHasErrors,
  setErrorMessage,
  setMessage,
} = lotsSlice.actions;

export default lotsSlice.reducer;
