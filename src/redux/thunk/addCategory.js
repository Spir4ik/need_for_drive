import fetchData from "../../api/fetchData";
import {getCategorySuccess, getCategoryStarted, getCategoryFailed} from "../actions/thunkActions/thunkAddCategory"

export default function addCategory(){
    return dispatch => {
        dispatch(getCategoryStarted());
        try {
            (async () => {
                const result = await fetchData('db/category');
                dispatch(getCategorySuccess(result))
            })()
        } catch(e) {
            dispatch(getCategoryFailed(e.message))
        }
    }
}