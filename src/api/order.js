import { authAxios } from '@constants/axios';
import { getOrderSetPath } from '@constants/api';

export const orderSet = data => authAxios.post(getOrderSetPath, data);
