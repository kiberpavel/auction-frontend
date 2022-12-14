import axios from 'axios';
import {
  getRegisterPath,
  getLoginPath,
  getSocialLoginPath,
  getCurrentUserPath,
} from '@constants/api';
import { authAxios } from '@constants/axios';

export const setUser = data => axios.post(getRegisterPath, data);
export const userLogin = data => axios.post(getLoginPath, data);
export const socialLogin = data => axios.post(getSocialLoginPath, data);
export const currentUser = () => authAxios.get(getCurrentUserPath);
