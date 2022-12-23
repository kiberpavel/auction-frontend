import { authAxios } from '@constants/axios';
import { getLotCreationPath } from '@constants/api';

export const lotCreation = data => authAxios.post(getLotCreationPath, data);
