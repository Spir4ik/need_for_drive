import fetchPost from "../../api/fetchPost"

export default function postData(store) {
    return dispatch => {
        dispatch(postStarted());

        fetchPost(
            response => {
                localStorage.setItem('id', response.data.id);
                dispatch(postSuccess(response.data.id));
            },
            error => dispatch(postFailed(error.message)),
            store
        )
    }
};

const postSuccess = currentOrderId => ({
    type: 'POST_SUCCESS',
    payload: {
        currentOrderId
    }
});

const postStarted = () => ({
    type: 'POST_STARTED',
});

const postFailed = error => ({
    type: 'POST_FAILURE',
    payload: {
        error
    }
});