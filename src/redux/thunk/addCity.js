import fetchData from "../../api/fetchData";

export default function addCity() {
    return dispatch => {
        dispatch(getCityStarted());
        try {
            (async () => {
                const result = await fetchData('db/city');
                dispatch(getCitySuccess(result))
            })()
        } catch(e) {
            dispatch(getCityFailed(e.message))
        }
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