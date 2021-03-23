export default (cityId) => {
    return {
        url: `https://api-factory.simbirsoft1.com/api/db/point?cityId=${cityId}`,
        method: 'GET',
        headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            'Authorization': 'Basic MTJmNHY4aTo0Y2JjZWE5NmRl',
            'Content-type': 'application/json'
        }
    }
}

