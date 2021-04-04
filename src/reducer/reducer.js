import { combineReducers } from 'redux';

const initialStateOrder = {
    cityId: {},
    pointId: {},
    carId: {},
    color: 'any',
    price: 0,
    dateFrom: 0,
    dateTo: 0
};

const initialStateCars = {
    loading: false,
    car: [],
    error: null
};

const initialStateCity = {
    loading: false,
    city: [],
    error: null
};

const initialStateCategory = {
    loading: false,
    category: [],
    error: null
};

const initialStatePoint = {
    loading: false,
    point: [],
    error: null
};

const initialStateDaysAndHours = {
    days: 0,
    hours: 0
}

function storeReducer(state = initialStateOrder, action) {
    switch (action.type) {
        case 'ADD_CITY_IN_STORE':
            return {
                ...state,
                cityId: action.payload.cityId
            };
        case 'ADD_POINT_IN_STORE':
            return {
                ...state,
                pointId: action.payload.pointId
            };
        case 'ADD_CAR_IN_STORE':
            return {
                ...state,
                carId: action.payload.carId
            };
        case 'ADD_COLOR_IN_STORE':
            return {
                ...state,
                color: action.payload.color
            };
        case 'ADD_PRICE_IN_STORE':
            return {
                ...state,
                price: action.payload.price
            };
        case 'ADD_DATE_FROM_IN_STORE':
            return {
                ...state,
                dateFrom: action.payload.dateFrom
            };
        case 'ADD_DATE_TO_IN_STORE':
            return {
                ...state,
                dateTo: action.payload.dateTo
            };
        default:
            return state;
    }
}

function daysAndHoursReducer(state = initialStateDaysAndHours, action) {
    if (action.type === 'ADD_DAYS_AND_HOURS') {
        return {
            ...state,
            days: action.payload.days,
            hours: action.payload.hours,
        }
    }
    return state;
}

function categoryIdReducer(state = '', action) {
    return action.type === 'ADD_CATEGORY_ID' ? action.payload.categoryId : state
}

function carsReducer(state = initialStateCars, action) {
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

function categoryReducer(state = initialStateCategory, action) {
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

function pointReducer(state = initialStatePoint, action) {
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

function cityReducer(state = initialStateCity, action) {
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

export default combineReducers(
    {
        cityReducer,
        pointReducer,
        storeReducer,
        categoryReducer,
        carsReducer,
        categoryIdReducer,
        daysAndHoursReducer
    }
)