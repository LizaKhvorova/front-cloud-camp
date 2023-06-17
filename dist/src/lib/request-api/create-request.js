import axios from 'axios';
import { createOptions } from './create-options';
export const createRequest = ({ baseUrl = '/api', defaultOptions, }) => ({
    get: (url, options) => {
        return request('GET', url, {
            headers: options === null || options === void 0 ? void 0 : options.headers,
            params: options === null || options === void 0 ? void 0 : options.params,
        }, { baseUrl, defaultOptions });
    },
    post: (url, options) => {
        return request('POST', url, {
            headers: options === null || options === void 0 ? void 0 : options.headers,
            params: options === null || options === void 0 ? void 0 : options.params,
            body: options === null || options === void 0 ? void 0 : options.body,
        }, { baseUrl, defaultOptions });
    },
    put: (url, options) => {
        return request('PUT', url, {
            headers: options === null || options === void 0 ? void 0 : options.headers,
            params: options === null || options === void 0 ? void 0 : options.params,
            body: options === null || options === void 0 ? void 0 : options.body,
        }, { baseUrl, defaultOptions });
    },
    patch: (url, options) => {
        return request('PATCH', url, {
            headers: options === null || options === void 0 ? void 0 : options.headers,
            params: options === null || options === void 0 ? void 0 : options.params,
            body: options === null || options === void 0 ? void 0 : options.body,
        }, { baseUrl, defaultOptions });
    },
    delete: (url, options) => {
        return request('DELETE', url, {
            headers: options === null || options === void 0 ? void 0 : options.headers,
            params: options === null || options === void 0 ? void 0 : options.params,
            body: {},
        }, { baseUrl, defaultOptions });
    },
});
const request = (method, url, options = {
    headers: {},
    params: {},
    body: {},
}, config) => {
    return axios(createOptions(method, url, options, config)).then((response) => response.data);
};
