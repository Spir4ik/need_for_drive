import fetchData from "../../api/fetchData";

export default function addCar(categoryId){
    return dispatch => {
        dispatch(getCarsStarted());
        try {
            (async () => {
                const result = categoryId ? await fetchData(`db/car?categoryId=${categoryId}`) : await fetchData('db/car');
                dispatch(getCarsSuccess(result))
            })()
        } catch(e) {
            dispatch(getCarsFailed(e.message))
        }
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