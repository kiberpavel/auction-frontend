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

export default {
  getEmail,
  getPassword,
  getError,
  getErrorStatus,
};
