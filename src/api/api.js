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
}