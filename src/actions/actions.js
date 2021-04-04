import api from '../api/api'

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
})

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
