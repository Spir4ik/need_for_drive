import fetchData from "../../api/fetchData";

export default function addRate(){
    // return dispatch => {
    //     dispatch(getRateStarted());

    //     fetchData(
    //         category => {
    //             dispatch(getRateSuccess(category.data))
    //         },
    //         error => dispatch(getRateFailed(error.message)),
    //         'db/rate'
    //     )
    // }
    return dispatch => {
        dispatch(getRateStarted());
        try {
            (async () => {
                const result = await fetchData('db/rate');
                dispatch(getRateSuccess(result))
            })()
        } catch(e) {
            dispatch(getRateFailed(e.message))
        }
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