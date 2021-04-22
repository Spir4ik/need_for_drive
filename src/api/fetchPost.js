import {api} from './api';

export default async function fetchData(cb, errorCb = null, store) {
    await api.post(
        "db/order",
        store,
    ).then(response => {
        cb(response.data);
    })
        .catch(error => {
            errorCb ? errorCb(error) : null;
        });
}