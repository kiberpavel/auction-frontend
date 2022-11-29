import axios from 'axios';
import { getRegisterPath } from '@constants/api';

export const setUser = data => axios.post(getRegisterPath, data);
