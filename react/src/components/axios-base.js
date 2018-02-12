import * as axios from 'axios';

let axiosBase = axios.create({
  baseURL: 'http://localhost:8848/api'
});

export default axiosBase;
