import axios from 'axios';
import apiConfig from './apiConfig.json';
import { getApiConfig } from './apiConfig';

const api = axios.create({
    baseURL: apiConfig.baseUrl,
    timeout: 10000,
    header: { 'Content-Type': 'application/json' }
});

export const apiRequest = async (endpoint, params = {}, data = null) => {
    const { url, method } = getApiConfig(enpoint, params);
    try {
        const response = await api.request({
            url, method, data
        });
        return response.data;
    }
    catch (error) {
        console.error(`Api request to : ${url} failed`);
        throw error;
    }
}

//Example Usage Methods

export const fetchUsers = () => apiRequest("GetUsers");