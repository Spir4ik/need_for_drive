import {api} from './api';

export default async function deleteOrder(accessToken, currentId) {
    const response = await api.delete(
        `db/order/${currentId}`,
        {
            headers: {
                'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
                'Authorization': `Bearer ${accessToken}`,
            }
        }
    )
    return response.data.data
}