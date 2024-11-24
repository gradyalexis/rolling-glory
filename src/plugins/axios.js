import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://recruitment.dev.rollingglory.com/api/v2',
});

export default axiosInstance;