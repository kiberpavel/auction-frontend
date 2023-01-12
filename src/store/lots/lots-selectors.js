const getPrice = state => {
  return state.lots.price;
};

const getShortName = state => {
  return state.lots.shortName;
};

const getDescription = state => {
  return state.lots.description;
};

const getImage = state => {
  return state.lots.price;
};

const getLotErrorStatus = state => {
  return state.lots.hasError;
};

const getLotMessage = state => {
  return state.lots.message;
};

const getLotErrorMessage = state => {
  return state.lots.errorMessage;
};

const getLots = state => {
  return state.lots.lots;
};

const getListOfLotsStatus = state => {
  return state.lots.listOfLotsStatus;
};

const getId = state => {
  return state.lots.id;
};

export default {
  getPrice,
  getShortName,
  getDescription,
  getImage,
  getLotErrorStatus,
  getLotMessage,
  getLotErrorMessage,
  getLots,
  getListOfLotsStatus,
  getId,
};
