import {api} from './api';

export default async function login(cb, errorCb = null) {
    await api.post(
        "auth/login",
        {username: 'intern', password: 'intern-S!'},
    ).then(response => {
        cb(response.data);
    })
        .catch(error => {
            errorCb ? errorCb(error) : null;
        });
}