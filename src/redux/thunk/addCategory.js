import fetchData from "../../api/fetchData";

export default function addCategory(){
    return dispatch => {
        dispatch(getCategoryStarted());
        try {
            (async () => {
                const result = await fetchData('db/category');
                dispatch(getCategorySuccess(result))
            })()
        } catch(e) {
            dispatch(getCategoryFailed(e.message))
        }
    }
}

const getCategorySuccess = category => ({
    type: 'ADD_CATEGORY_SUCCESS',
    payload: {
        category
    }
});

const getCategoryStarted = () => ({
    type: 'ADD_CATEGORY_STARTED'
});

const getCategoryFailed = error => ({
    type: 'ADD_CATEGORY_FAILURE',
    payload: {
        error
    }
});