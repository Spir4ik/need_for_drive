import fetchData from "../../api/fetchData";
import {getCitySuccess, getCityStarted, getCityFailed} from '../actions/thunkActions/thunkAddCity'

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