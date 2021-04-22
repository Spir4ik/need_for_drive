import fetchData from "../../api/fetchData";

export default function addPoint(paramUrl) {
    return dispatch => {
        dispatch(getPointStarted());

        fetchData(
            points => {
                dispatch(getPointSuccess(points.data))
            },
            error => dispatch(getPointFailed(error.message)),
            `db/point?cityId=${paramUrl}`
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
    type: 'ADD_POINT_STARTED',
});

const getPointFailed = error => ({
    type: 'ADD_POINT_FAILURE',
    payload: {
        error
    }
});