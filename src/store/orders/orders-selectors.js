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

const getCount = state => {
  return state.orders.count;
};

const getUserOrders = state => {
  return state.orders.userOrders;
};

const getTotalSum = state => {
  return state.orders.totalSum;
};

export default {
  getMessage,
  getErrorStatus,
  getLotErrorMessage,
  getTime,
  getCount,
  getUserOrders,
  getTotalSum,
};
