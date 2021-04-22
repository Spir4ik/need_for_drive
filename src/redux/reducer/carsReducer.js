const initialStateCars = {
    loading: false,
    car: [],
    error: null
};

export default function carsReducer(state = initialStateCars, action) {
    switch (action.type) {
        case 'ADD_CAR_STARTED':
            return {
                ...state,
                loading: true,
                car: []
            };
        case 'ADD_CAR_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                car: action.payload.car
            };
        case 'ADD_CAR_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}