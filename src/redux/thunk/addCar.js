import fetchData from "../../api/fetchData";

export default function addCar(categoryId){
    return dispatch => {
        dispatch(getCarsStarted());

        fetchData(
            category => {
                dispatch(getCarsSuccess(category.data))
            },
            error => dispatch(getCarsFailed(error.message)),
            categoryId !== '' ? `db/car?categoryId=${categoryId}` : 'db/car'
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