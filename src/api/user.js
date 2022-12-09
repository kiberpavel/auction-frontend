import axios from 'axios';
import { getRegisterPath } from '@constants/api';
import { getLoginPath } from '@constants/api';
import { getSocialLoginPath } from '@constants/api';

export const setUser = data => axios.post(getRegisterPath, data);
export const userLogin = data => axios.post(getLoginPath, data);
export const socialLogin = data => axios.post(getSocialLoginPath, data);
