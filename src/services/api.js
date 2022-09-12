import axios from 'axios';
// import { getToken } from './auth';

// require('dotenv').config();

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export default api;
