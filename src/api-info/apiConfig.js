import apiConfig from './apiConfig.json';

export const getApiConfig = (endpoint, params = {}) => {
    const { baseUrl, endpoints } = apiConfig;
    if (!endpoints[endpoint]) {
        throw new Error(`Endpoint not found : ${endpoint}`);
    }
    let { url, method } = endpoints[endpoint];
    Objects.keys(params).array.forEach(element => {
        url = url.replace(`${element}`, params[element]);
    });
    return { url: `${baseUrl}${url}`, method };
}

