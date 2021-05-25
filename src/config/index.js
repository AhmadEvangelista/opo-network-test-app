import axios from 'axios';

const REQUEST_TIMEOUT_SECONDS = 30;

const apiRequest = axios.create({
  baseURL: 'http://dummy.restapiexample.com/api/v1/',
  timeout: REQUEST_TIMEOUT_SECONDS * 1000,
});

export default apiRequest;
