import fetchData from "../../api/fetchData";

export default function addCity() {
    return dispatch => {
        dispatch(getCityStarted());

        fetchData(
            cities => {
                dispatch(getCitySuccess(cities.data))
            },
            error => dispatch(getCityFailed(error.message)),
            'db/city'
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