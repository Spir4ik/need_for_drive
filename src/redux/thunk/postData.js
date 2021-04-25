import fetchPost from "../../api/fetchPost"

export default function postData(store) {
    return dispatch => {
        dispatch(postStarted());
        try {
            (async () => {
                const result = await fetchPost(store);
                localStorage.setItem('id', result);
                dispatch(postSuccess(result))
            })()
        } catch(e) {
            dispatch(postFailed(e.message))
        }
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