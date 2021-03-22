export default () => {
    return {
        url: `http://api-factory.simbirsoft1.com/api/db/city`,
        method: 'GET',
        headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            "Access-Control-Allow-Origin": "*",
            'Authorization': `bearer ${JSON.parse(localStorage.getItem('access_token'))}`,
        }
    }
}