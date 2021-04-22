import axios from "axios";

const BASE_URL = "https://api-factory.simbirsoft1.com/api/";

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
        'Authorization': 'Basic MTJmNHY4aTo0Y2JjZWE5NmRl',
        'Content-type': 'application/json',
    }
});
