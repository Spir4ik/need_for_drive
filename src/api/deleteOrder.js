import {api} from './api';

export default async function deleteOrder(cb, errorCb = null, accessToken, currentId) {
    await api.delete(
        `db/order/${currentId}`,
        {
            headers: {
                'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
                'Authorization': `Bearer ${accessToken}`,
            }
        }
    ).then((response) => {
            cb(response.data);
    })
    .catch((error) => {
        errorCb ? errorCb(error) : null
    });
}