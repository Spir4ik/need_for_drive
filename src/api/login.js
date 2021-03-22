export default () => {
    return {
        url: 'https://api-factory.simbirsoft1.com/api/auth/login',
        method: 'POST',
        headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            'Authorization': 'Basic MTJmNHY4aTo0Y2JjZWE5NmRl',
            'Content-type': 'application/json'
        },
        data: {
            username: 'intern', password: 'intern-S'
        }
    }
}