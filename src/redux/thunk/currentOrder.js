import fetchOrder from "../../api/fetchOrder";

export default function currentOrder(access_token, orderId) {
    return dispatch => {
        dispatch(currentOrderStarted());

        fetchOrder(
            response => {
                dispatch(currentOrderSuccess(response.data));
            },
            error => dispatch(currentOrderFailed(error.message)),
            access_token,
            orderId
        )
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