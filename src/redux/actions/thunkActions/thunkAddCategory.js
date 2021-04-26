export const getCategorySuccess = category => ({
    type: 'ADD_CATEGORY_SUCCESS',
    payload: {
        category
    }
});

export const getCategoryStarted = () => ({
    type: 'ADD_CATEGORY_STARTED'
});

export const getCategoryFailed = error => ({
    type: 'ADD_CATEGORY_FAILURE',
    payload: {
        error
    }
});