import deleteOrder from "../../api/deleteOrder"
import {deleteCurrentOrderSuccess, deleteCurrentOrderStarted, deleteCurrentOrderFailed} from "../actions/thunkActions/thunkDeleteOrder"

export default function deleteCurrentOrder(access_token, orderId) {
    return dispatch => {
        dispatch(deleteCurrentOrderStarted());
        try {
            (async () => {
                const result = await deleteOrder(access_token, orderId);
                dispatch(deleteCurrentOrderSuccess(result))
            })()
        } catch(e) {
            dispatch(deleteCurrentOrderFailed(e.message))
        }
    }
};