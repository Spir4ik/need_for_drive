import fetchPost from "../../api/fetchPost"
import {postSuccess, postStarted, postFailed} from "../actions/thunkActions/thunkPostData"

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