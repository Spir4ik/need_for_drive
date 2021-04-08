import api from '../api/api'

export const showModalWindow = () => ({
    type: 'SHOW_MODAL_WINDOW'
});

export const addCityInStore = cityId => ({
    type: 'ADD_CITY_IN_STORE',
    payload: {
        cityId
    }
});

export const addPointInStore = pointId => ({
    type: 'ADD_POINT_IN_STORE',
    payload: {
        pointId
    }
});

export const addCarInStore = carId => ({
    type: 'ADD_CAR_IN_STORE',
    payload: {
        carId
    }
});

export const addColorInStore = color => ({
    type: 'ADD_COLOR_IN_STORE',
    payload: {
        color
    }
});

export const addPriceInStore = price => ({
    type: 'ADD_PRICE_IN_STORE',
    payload: {
        price
    }
});

export const addDateFromInStore = dateFrom => ({
    type: 'ADD_DATE_FROM_IN_STORE',
    payload: {
        dateFrom
    }
});

export const addDateToInStore = dateTo => ({
    type: 'ADD_DATE_TO_IN_STORE',
    payload: {
        dateTo
    }
});

export const addRateInStore = rateId => ({
    type: 'ADD_RATE_IN_STORE',
    payload: {
        rateId
    }
});

export const addTankInStore = () => ({
    type: 'ADD_TANK_IN_STORE'
});

export const addCharInStore = () => ({
    type: 'ADD_CHAR_IN_STORE'
});

export const addRightHandDrive = () => ({
    type: 'ADD_RIGHT_HAND_DRIVE'
})

export const addCategoryId = categoryId => ({
    type: 'ADD_CATEGORY_ID',
    payload: {
        categoryId
    }
});

export const addDaysAndHours = (days, hours) => ({
    type: 'ADD_DAYS_AND_HOURS',
    payload: {
        days,
        hours
    }
});

export const currentOrder = (access_token, orderId) => {
    return dispatch => {
        dispatch(currentOrderStarted());

        api.fetchCurrentOrder(
            response => {
                dispatch(currentOrderSuccess(response.data));
            },
            error => dispatch(currentOrderFailed(error.message)),
            access_token,
            orderId
        )
    }
};

const currentOrderSuccess = currentOrder => ({
    type: 'CURRENT_ORDER_SUCCESS',
    payload: {
        currentOrder
    }
});

const currentOrderStarted = () => ({
    type: 'CURRENT_ORDER_STARTED',
});

const currentOrderFailed = error => ({
    type: 'CURRENT_ORDER_FAILURE',
    payload: {
        error
    }
});

export const login = () => {
    return dispatch => {
        dispatch(loginStarted());

        api.fetchLogin(
            response => {
                dispatch(loginSuccess(response.access_token));
            },
            error => dispatch(loginFailed(error.message))
        )
    }
};

const loginSuccess = loginData => ({
    type: 'LOGIN_SUCCESS',
    payload: {
        loginData
    }
});

const loginStarted = () => ({
    type: 'LOGIN_STARTED',
});

const loginFailed = error => ({
    type: 'LOGIN_FAILURE',
    payload: {
        error
    }
});

export const postData = () => {
    return dispatch => {
        dispatch(postStarted());

        api.fetchPost(
            response => {
                localStorage.setItem('id', response.data.id);
                dispatch(postSuccess(response.data.id));
            },
            error => dispatch(postFailed(error.message))
        )
    }
};

const postSuccess = currentOrderId => ({
    type: 'POST_SUCCESS',
    payload: {
        currentOrderId
    }
});

const postStarted = () => ({
    type: 'POST_STARTED',
});

const postFailed = error => ({
    type: 'POST_FAILURE',
    payload: {
        error
    }
});

export const addRate = () => {
    return dispatch => {
        dispatch(getRateStarted());

        api.fetchData(
            category => {
                dispatch(getRateSuccess(category.data))
            },
            error => dispatch(getRateFailed(error.message)),
            'rate'
        )
    }
}

const getRateSuccess = rate => ({
    type: 'ADD_RATE_SUCCESS',
    payload: {
        rate
    }
});

const getRateStarted = () => ({
    type: 'ADD_RATE_STARTED',
});

const getRateFailed = error => ({
    type: 'ADD_RATE_FAILURE',
    payload: {
        error
    }
});

export const addCar = (categoryId) => {
    return dispatch => {
        dispatch(getCarsStarted());

        api.fetchData(
            category => {
                dispatch(getCarsSuccess(category.data))
            },
            error => dispatch(getCarsFailed(error.message)),
            categoryId !== '' ? `car?categoryId=${categoryId}` : 'car'
        )
    }
}

const getCarsSuccess = car => ({
    type: 'ADD_CAR_SUCCESS',
    payload: {
        car
    }
});

const getCarsStarted = () => ({
    type: 'ADD_CAR_STARTED',
});

const getCarsFailed = error => ({
    type: 'ADD_CAR_FAILURE',
    payload: {
        error
    }
});

export const addCategory = () => {
    return dispatch => {
        dispatch(getCategoryStarted());

        api.fetchData(
            category => {
                dispatch(getCategorySuccess(category.data))
            },
            error => dispatch(getCategoryFailed(error.message)),
            'category'
        )
    }
}

const getCategorySuccess = category => ({
    type: 'ADD_CATEGORY_SUCCESS',
    payload: {
        category
    }
});

const getCategoryStarted = () => ({
    type: 'ADD_CATEGORY_STARTED'
});

const getCategoryFailed = error => ({
    type: 'ADD_CATEGORY_FAILURE',
    payload: {
        error
    }
});

export const addPoint = (paramUrl) => {
    return dispatch => {
        dispatch(getPointStarted());

        api.fetchData(
            points => {
                dispatch(getPointSuccess(points.data))
            },
            error => dispatch(getPointFailed(error.message)),
            `point?cityId=${paramUrl}`
        )
    }
}

const getPointSuccess = point => ({
    type: 'ADD_POINT_SUCCESS',
    payload: {
        point
    }
});

const getPointStarted = () => ({
    type: 'ADD_POINT_STARTED'
});

const getPointFailed = error => ({
    type: 'ADD_POINT_FAILURE',
    payload: {
        error
    }
});

export const addCity = () => {
    return dispatch => {
        dispatch(getCityStarted());

        api.fetchData(
            cities => {
                dispatch(getCitySuccess(cities.data))
            },
            error => dispatch(getCityFailed(error.message)),
            'city'
        )
    }
};

const getCitySuccess = city => ({
    type: 'ADD_CITY_SUCCESS',
    payload: {
        city
    }
});

const getCityStarted = () => ({
    type: 'ADD_CITY_STARTED'
});

const getCityFailed = error => ({
    type: 'ADD_CITY_FAILURE',
    payload: {
        error
    }
});
