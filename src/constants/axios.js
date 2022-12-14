import axios from 'axios';

const token = JSON.parse(localStorage.getItem('token'));

export const authAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
