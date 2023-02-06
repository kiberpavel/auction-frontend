export const getRegisterPath = `${process.env.REACT_APP_API_URL}/register`;
export const getLoginPath = `${process.env.REACT_APP_API_URL}/login`;
export const getSocialLoginPath = `${process.env.REACT_APP_API_URL}/social-login`;
export const getCurrentUserPath = `${process.env.REACT_APP_API_URL}/users/current`;
export const getLotCreationPath = `${process.env.REACT_APP_API_URL}/lot/create`;
export const getLotDeletePath = `${process.env.REACT_APP_API_URL}/lot/delete`;
export const getLotUpdatePath = `${process.env.REACT_APP_API_URL}/lot/update`;
export const getLotListPath = `${process.env.REACT_APP_API_URL}/lot/list`;
export const getLotPriceUpPath = `${process.env.REACT_APP_API_URL}/lot/edit/price`;
export const getOrderSetPath = `${process.env.REACT_APP_API_URL}/order/set`;
export const getUserOrderPath = userId =>
  `${process.env.REACT_APP_API_URL}/order/${userId}`;
export const getOrderPayPath = `${process.env.REACT_APP_API_URL}/order/pay`;
