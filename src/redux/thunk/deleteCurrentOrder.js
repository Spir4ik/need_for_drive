import deleteOrder from "../../api/deleteOrder"

export default function deleteCurrentOrder(access_token, orderId) {
    return dispatch => {
        dispatch(deleteCurrentOrderStarted());

        deleteOrder(
            response => {
                dispatch(deleteCurrentOrderSuccess(response.data));
            },
            error => dispatch(deleteCurrentOrderFailed(error.message)),
            access_token,
            orderId
        )
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