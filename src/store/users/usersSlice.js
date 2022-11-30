import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setUser } from '@api/user';

export const addUser = createAsyncThunk(
  'user/addUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await setUser(data);

      return response.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.detail);
    }
  },
);

const initialState = {
  email: '',
  password: '',
  error: '',
  message: '',
  hasErrors: false,
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(addUser.pending, state => {
      state.email = '';
      state.password = '';
      state.message = '';
      state.hasErrors = false;
      state.error = '';
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.error = action.payload;
      state.hasErrors = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.message = action.payload.message;
    });
  },
});

export const { setEmail, setPassword } = usersSlice.actions;

export default usersSlice.reducer;
