import { authAxios } from '@constants/axios';
import {
  getLotCreationPath,
  getLotDeletePath,
  getLotUpdatePath,
  getLotListPath,
} from '@constants/api';

export const lotCreation = data => authAxios.post(getLotCreationPath, data);
export const lotDelete = data => authAxios.post(getLotDeletePath, data);
export const lotUpdate = data => authAxios.post(getLotUpdatePath, data);
export const lotList = () => authAxios.get(getLotListPath);
