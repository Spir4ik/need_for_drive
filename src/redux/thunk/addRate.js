import fetchData from "../../api/fetchData";
import {getRateSuccess, getRateStarted, getRateFailed} from "../actions/thunkActions/thunkAddRate"

export default function addRate(){
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