import { authAxios } from '@constants/axios';
import {
  getOrderSetPath,
  getUserOrderPath,
  getOrderPayPath,
} from '@constants/api';

export const orderSet = data => authAxios.post(getOrderSetPath, data);
export const orderListForUser = userId =>
  authAxios.get(getUserOrderPath(userId));
export const orderPay = data => authAxios.post(getOrderPayPath, data);
