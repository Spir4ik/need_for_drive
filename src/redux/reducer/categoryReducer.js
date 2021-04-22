const initialStateCategory = {
    loading: false,
    category: [],
    error: null
};

export default function categoryReducer(state = initialStateCategory, action) {
    switch (action.type) {
        case 'ADD_CATEGORY_STARTED':
            return {
                ...state,
                loading: true
            };
        case 'ADD_CATEGORY_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                category: action.payload.category
            };
        case 'ADD_CATEGORY_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}