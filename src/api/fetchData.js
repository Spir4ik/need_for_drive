import {api} from './api';

export default async function fetchData(url) {
    const response = await api.get(url);
    return response.data.data;
}