// @ts-nocheck
import axios from "axios";
// import store from '../store/index'
//import router  from '../router/index';

export const httpClient = axios.create({
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        baseURL: import.meta.env.VITE_APP_API_BASE,
        'Content-Type': 'application/json'
    }
});

export const queryParamsObj = (params_iter) => {
    console.log(params_iter);
    let params = {}
    for(let [key, value] of params_iter) {
        params[key] = value;
    }
    return params;
};