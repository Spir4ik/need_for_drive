export const getCitySuccess = city => ({
    type: 'ADD_CITY_SUCCESS',
    payload: {
        city
    }
});

export const getCityStarted = () => ({
    type: 'ADD_CITY_STARTED'
});

export const getCityFailed = error => ({
    type: 'ADD_CITY_FAILURE',
    payload: {
        error
    }
});