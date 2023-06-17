const CONTENT_TYPE = 'Content-Type';
export const createOptions = (method, url, options, config) => {
    var _a;
    return ({
        method,
        withCredentials: true,
        headers: createHeaders(Object.assign(Object.assign({}, options), config.defaultOptions)),
        params: Object.assign(Object.assign({}, options.params), (_a = config.defaultOptions) === null || _a === void 0 ? void 0 : _a.params),
        data: options.body,
        baseURL: config.baseUrl,
        url,
    });
};
const createHeaders = (options) => {
    return Object.assign(Object.assign({}, options.headers), { [CONTENT_TYPE]: options.headers && options.headers[CONTENT_TYPE]
            ? options.headers[CONTENT_TYPE]
            : 'application/json;charset=UTF-8' });
};
