import fetchOrder from "../../api/fetchOrder";

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

const currentOrderSuccess = currentOrder => ({
    type: 'CURRENT_ORDER_SUCCESS',
    payload: {
        currentOrder
    }
});

const currentOrderStarted = () => ({
    type: 'CURRENT_ORDER_STARTED',
});

const currentOrderFailed = error => ({
    type: 'CURRENT_ORDER_FAILURE',
    payload: {
        error
    }
});