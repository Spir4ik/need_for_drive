import {api} from './api';

export default async function fetchOrder(cb, errorCb = null, accessToken, url) {
    await api.get(
        `db/order?id=${url}`,
        {
            headers: {
                'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
                'Authorization': `Bearer ${accessToken}`,
                'Content-type': 'application/json',
            }
        }
    ).then(response => {
        cb(response.data);
    })
        .catch(error => {
            errorCb ? errorCb(error) : null;
        });
}