import { authAxios } from '@constants/axios';
import {
  getLotCreationPath,
  getLotDeletePath,
  getLotUpdatePath,
  getLotListPath,
  getLotPriceUpPath,
} from '@constants/api';
import axios from 'axios';

export const lotCreation = data => authAxios.post(getLotCreationPath, data);
export const lotDelete = data => authAxios.post(getLotDeletePath, data);
export const lotUpdate = data => authAxios.post(getLotUpdatePath, data);
export const lotList = authStatus =>
  !authStatus ? axios.get(getLotListPath) : authAxios.get(getLotListPath);
export const lotPriceUp = data => authAxios.post(getLotPriceUpPath, data);
