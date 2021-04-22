import {api} from './api';

export default async function fetchData(cb, errorCb = null, url) {
    await api.get(
        url,
        {}
    ).then(response => {
        cb(response.data);
    })
    .catch(error => {
        errorCb ? errorCb(error) : null;
    });
}