import {api} from './api';

export default async function fetchData(store) {
    const response = await api.post("db/order", store)
    return response.data.data.id
}