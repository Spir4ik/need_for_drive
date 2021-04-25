import {api} from './api';

export default async function login() {
    const response = await api.post(
        "auth/login",
        {username: 'intern', password: 'intern-S!'}
    )
    return response.data.access_token
}