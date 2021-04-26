import fetchData from "../../api/fetchData";
import {getCarsSuccess, getCarsStarted, getCarsFailed} from '../actions/thunkActions/thunkAddCar'

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