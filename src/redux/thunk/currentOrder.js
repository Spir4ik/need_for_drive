import fetchOrder from "../../api/fetchOrder";
import {currentOrderSuccess, currentOrderStarted, currentOrderFailed} from "../actions/thunkActions/thunkCurrentOrder"

export default function currentOrder(access_token, orderId) {
    return dispatch => {
        dispatch(currentOrderStarted());
        try {
            (async () => {
                const result = await fetchOrder(access_token, orderId);
                dispatch(currentOrderSuccess(result))
            })()
        } catch(e) {
            dispatch(currentOrderFailed(e.message))
        }
    }
};