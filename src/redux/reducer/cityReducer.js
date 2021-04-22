const initialStateCity = {
    loading: false,
    city: [],
    error: null
};

export default function cityReducer(state = initialStateCity, action) {
    switch (action.type) {
        case 'ADD_CITY_STARTED':
            return {
                ...state,
                loading: true
            };
        case 'ADD_CITY_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                city: action.payload.city
            };
        case 'ADD_CITY_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}