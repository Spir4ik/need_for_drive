import fetchData from "../../api/fetchData";

export default function addPoint(paramUrl) {
    // return dispatch => {
    //     dispatch(getPointStarted());
    //     try {
    //         (async () => {
    //             const result = await fetchData(`db/point?cityId=${paramUrl}`);
    //             dispatch(getPointSuccess(result))
    //         })()
    //     } catch(e) {
    //         dispatch(getPointFailed(e.message))
    //     }
    // }
}

const getPointSuccess = point => ({
    type: 'ADD_POINT_SUCCESS',
    payload: {
        point
    }
});

const getPointStarted = () => ({
    type: 'ADD_POINT_STARTED',
});

const getPointFailed = error => ({
    type: 'ADD_POINT_FAILURE',
    payload: {
        error
    }
});