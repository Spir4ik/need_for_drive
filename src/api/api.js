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
    async fetchPost(cb, errorCb = null) {
        await axios({
            url: `https://api-factory.simbirsoft1.com/api/db/order`,
            method: 'POST',
            headers: {
                'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
                'Authorization': 'Basic MTJmNHY4aTo0Y2JjZWE5NmRl',
                'Content-type': 'application/json'
            },
            data: {
                carId: {categoryId: {name: "Премиум", description: "Премиум!", id: "5e25c99a099b810b946c5d63"},
                    colors: ["false,Черный"],
                    createdAt: 1587636257691,
                    description: "",
                    id: "5ea16821099b810b946c62b8",
                    name: "Hyundai, Tucson",
                    number: "м000ок",
                    priceMax: 32000,
                    priceMin: 10000,
                    tank: 0,
                    thumbnail: {size: 45250, originalname: "5f21d9459d3a610b850fcd57_5ea9e5f3099b810b946c7234_97cfab8f5d3e6e963d8183e5ad70e734.png", mimetype: "image/png", path: "/files/601c54bead015e0bb6997f4d_5f21d9459d3a610b85…810b946c7234_97cfab8f5d3e6e963d8183e5ad70e734.png"},
                    updatedAt: 1612471786460},
                cityId:{
                    id: "5e26a128099b810b946c5d87",
                    name: "Ульяновск"},
                color: "Любой",
                dateFrom: 1611410400000,
                dateTo: 1612468800000,
                isFullTank: true,
                isNeedChildChair: true,
                isRightWheel: true,
                orderStatusId: {name: "new", id: "5e26a191099b810b946c5d89"},
                pointId:
                    {address: "Нариманова 1, корп.2",
                        id: "5e26a148099b810b946c5d88",
                        name: "База 007"},
                price: 17300,
                rateId:
                    {id: "5fd910f2935d4e0be16a3c40",
                        price: 7500,
                        rateTypeId: {unit: "7 дней", name: "Недельный Плюс", id: "5f622f029d3a610b850fd820"}},
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