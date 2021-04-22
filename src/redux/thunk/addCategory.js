import fetchData from "../../api/fetchData";

export default function addCategory(){
    return dispatch => {
        dispatch(getCategoryStarted());

        fetchData(
            category => {
                dispatch(getCategorySuccess(category.data))
            },
            error => dispatch(getCategoryFailed(error.message)),
            'db/category'
        )
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