const initialStatePoint = {
    loading: false,
    point: [],
    error: null
};

export default function pointReducer(state = initialStatePoint, action) {
    switch (action.type) {
        case 'ADD_POINT_STARTED':
            return {
                ...state,
                loading: true
            };
        case 'ADD_POINT_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                point: action.payload.point
            };
        case 'ADD_POINT_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}