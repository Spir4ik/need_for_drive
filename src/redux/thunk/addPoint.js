import fetchData from "../../api/fetchData";
import {getPointSuccess, getPointStarted, getPointFailed} from "../actions/thunkActions/thunkAddPoint"

export default function addPoint(paramUrl) {
    return dispatch => {
        dispatch(getPointStarted());
        try {
            (async () => {
                const result = await fetchData(`db/point?cityId=${paramUrl}`);
                dispatch(getPointSuccess(result))
            })()
        } catch(e) {
            dispatch(getPointFailed(e.message))
        }
    }
}