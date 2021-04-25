import deleteOrder from "../../api/deleteOrder"

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

const deleteCurrentOrderSuccess = successData => ({
    type: 'DELETE_CURRENT_ORDER_SUCCESS',
    payload: {
        successData
    }
});

const deleteCurrentOrderStarted = () => ({
    type: 'DELETE_CURRENT_ORDER_STARTED',
});

const deleteCurrentOrderFailed = error => ({
    type: 'DELETE_CURRENT_ORDER_FAILURE',
    payload: {
        error
    }
});