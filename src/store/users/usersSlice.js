import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setUser, userLogin, socialLogin, currentUser } from '@api/user';

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

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await userLogin(data);

      return response.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
);

export const loginUserViaSocial = createAsyncThunk(
  'user/loginUserViaSocial',
  async (data, { rejectWithValue }) => {
    try {
      const response = await socialLogin(data);

      return response.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.detail);
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await currentUser();

      return response.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
);

const initialState = {
  email: '',
  password: '',
  error: '',
  message: '',
  hasErrors: false,
  token: '',
  isLogIn: false,
  id: '',
};

const resetUserPendingData = state => {
  state.email = '';
  state.password = '';
  state.message = '';
  state.hasErrors = false;
  state.error = '';
  state.token = '';
  state.isLogIn = false;
  localStorage.setItem('token', JSON.stringify(''));
};

const setUserRejectedData = (state, action) => {
  state.error = action.payload;
  state.hasErrors = true;
};

const setLoginFulfilledData = (state, action) => {
  state.isLogIn = true;
  state.token = action.payload.token;
  localStorage.setItem('token', JSON.stringify(state.token));
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
    logOutUser: state => {
      resetUserPendingData(state);
    },
  },
  extraReducers: builder => {
    builder.addCase(addUser.pending, state => {
      resetUserPendingData(state);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      setUserRejectedData(state, action);
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.message = action.payload.message;
    });
    builder.addCase(loginUser.pending, state => {
      resetUserPendingData(state);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      setUserRejectedData(state, action);
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      setLoginFulfilledData(state, action);
    });
    builder.addCase(loginUserViaSocial.pending, state => {
      resetUserPendingData(state);
    });
    builder.addCase(loginUserViaSocial.rejected, (state, action) => {
      setUserRejectedData(state, action);
    });
    builder.addCase(loginUserViaSocial.fulfilled, (state, action) => {
      setLoginFulfilledData(state, action);
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      setUserRejectedData(state, action);
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
    });
  },
});

export const { setEmail, setPassword, logOutUser } = usersSlice.actions;

export default usersSlice.reducer;
