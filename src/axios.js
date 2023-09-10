import axios from 'axios';
import _ from 'lodash';
import config from './config';

const instance = axios.create({
    baseURL: config.api.API_BASE_URL,
    // withCredentials: true
});



instance.interceptors.response.use(
    (response) => {

        // const { data } = response;
        // return response.data;
        return response;
    })


export default instance;
