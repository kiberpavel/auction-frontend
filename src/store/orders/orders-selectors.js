const getMessage = state => {
  return state.orders.message;
};

const getErrorStatus = state => {
  return state.orders.hasErrors;
};

const getLotErrorMessage = state => {
  return state.orders.errorMessage;
};

const getTime = state => {
  return state.orders.time;
};

export default {
  getMessage,
  getErrorStatus,
  getLotErrorMessage,
  getTime,
};
