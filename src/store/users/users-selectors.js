const getEmail = state => {
  return state.users.email;
};

const getPassword = state => {
  return state.users.password;
};

const getError = state => {
  return state.users.error;
};

const getErrorStatus = state => {
  return state.users.hasErrors;
};

const getLogInStatus = state => {
  return state.users.isLogIn;
};

export default {
  getEmail,
  getPassword,
  getError,
  getErrorStatus,
  getLogInStatus,
};
