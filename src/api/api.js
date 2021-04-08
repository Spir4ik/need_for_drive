import axios from 'axios'

export default {
    async fetchData(cb, errorCb = null, url) {
        await axios({
                url: `https://api-factory.simbirsoft1.com/api/db/${url}`,
                method: 'GET',
                headers: {
                    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
                    'Authorization': 'Basic MTJmNHY4aTo0Y2JjZWE5NmRl',
                    'Content-type': 'application/json'
                }
            })
            .then((response) => {
                cb(response.data);
            })
            .catch((error) => {
                errorCb ? errorCb(error) : null
            });
    },
    async fetchLogin(cb, errorCb = null) {
        await axios({
            url: `https://api-factory.simbirsoft1.com/api/auth/login`,
            method: 'POST',
            headers: {
                'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
                'Authorization': 'Basic MTJmNHY4aTo0Y2JjZWE5NmRl',
                'Content-type': 'application/json'
            },
            data: {username: 'intern', password: 'intern-S!'}
        })
            .then((response) => {
                cb(response.data);
            })
            .catch((error) => {
                errorCb ? errorCb(error) : null
            });
    },
    async fetchCurrentOrder(cb, errorCb = null, accessToken, currentId) {
        await axios({
            url: `https://api-factory.simbirsoft1.com/api/db/order?id=${currentId}`,
            method: 'GET',
            headers: {
                'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
                'Authorization': `Bearer ${accessToken}`,
                'Content-type': 'application/json'
            }
        })
            .then((response) => {
                cb(response.data);
            })
            .catch((error) => {
                errorCb ? errorCb(error) : null
            });
    },
    async deleteCurrentOrder(cb, errorCb = null, accessToken, currentId) {
        await axios({
            url: `https://api-factory.simbirsoft1.com/api/db/order/${currentId}`,
            method: 'DELETE',
            headers: {
                'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
                'Authorization': `Bearer ${accessToken}`,
            }
        })
            .then((response) => {
                cb(response.data);
            })
            .catch((error) => {
                errorCb ? errorCb(error) : null
            });
    },
    async fetchPost(cb, errorCb = null, store) {
        await axios({
            url: `https://api-factory.simbirsoft1.com/api/db/order`,
            method: 'POST',
            headers: {
                'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
                'Authorization': 'Basic MTJmNHY4aTo0Y2JjZWE5NmRl',
                'Content-type': 'application/json'
            },
            data: store
        })
            .then((response) => {
                cb(response.data);
            })
            .catch((error) => {
                errorCb ? errorCb(error) : null
            });
    },
}