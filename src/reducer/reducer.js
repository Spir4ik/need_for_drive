import { combineReducers } from 'redux';

const initialStateOrder = {
    orderStatusId: {name: "new", id: "5e26a191099b810b946c5d89"},
    cityId: {},
    pointId: {},
    carId: {},
    color: '',
    price: 0,
    dateFrom: 0,
    dateTo: 0,
    rateId: {},
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false
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

const initialStateRate = {
    loading: false,
    rate: [],
    error: null
};

const initialStateOrderId = {
    loading: false,
    currentOrderId: '',
    error: null
};

const initialStateLogin = {
    loading: false,
    accessToken: '',
    error: null
};

const initialStateCurrentOrder = {
    loading: false,
    currentOrder: [],
    error: null
};

const initialStateDeleteCurrentOrder = {
    loading: false,
    successData: [],
    error: null
}

const initialStateDaysAndHours = {
    days: 0,
    hours: 0
};

function modalWindowReducer(state = false, action) {
    return action.type === 'SHOW_MODAL_WINDOW' ? !state : state;
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
        case 'ADD_RATE_IN_STORE':
            return {
                ...state,
                rateId: action.payload.rateId
            };
        case 'ADD_TANK_IN_STORE':
            return {
                ...state,
                isFullTank: !state.isFullTank,
                price: !state.isFullTank ? state.price + 500 : state.price - 500
            };
        case 'ADD_CHAR_IN_STORE':
            return {
                ...state,
                isNeedChildChair: !state.isNeedChildChair,
                price: !state.isNeedChildChair ? state.price + 200 : state.price - 200
            };
        case 'ADD_RIGHT_HAND_DRIVE':
            return {
                ...state,
                isRightWheel: !state.isRightWheel,
                price: !state.isRightWheel ? state.price + 1600 : state.price - 1600
            }
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

function deleteCurrentOrderReducer(state = initialStateDeleteCurrentOrder, action) {
    switch (action.type) {
        case 'DELETE_CURRENT_ORDER_STARTED':
            return {
                ...state,
                loading: true,
                successData: []
            };
        case 'DELETE_CURRENT_ORDER_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                successData: action.payload.successData
            };
        case 'DELETE_CURRENT_ORDER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

function currentOrderReducer(state = initialStateCurrentOrder, action) {
    switch (action.type) {
        case 'CURRENT_ORDER_STARTED':
            return {
                ...state,
                loading: true,
                currentOrder: []
            };
        case 'CURRENT_ORDER_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                currentOrder: action.payload.currentOrder
            };
        case 'CURRENT_ORDER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

function loginReducer(state = initialStateLogin, action) {
    switch (action.type) {
        case 'LOGIN_STARTED':
            return {
                ...state,
                loading: true,
                accessToken: ''
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                accessToken: action.payload.loginData
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

function currentOrderIdReducer(state = initialStateOrderId, action) {
    switch (action.type) {
        case 'POST_STARTED':
            return {
                ...state,
                loading: true,
                currentOrderId: ''
            };
        case 'POST_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                currentOrderId: action.payload.currentOrderId
            };
        case 'POST_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

function rateReducer(state = initialStateRate, action) {
    switch (action.type) {
        case 'ADD_RATE_STARTED':
            return {
                ...state,
                loading: true,
                rate: []
            };
        case 'ADD_RATE_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                rate: action.payload.rate
            };
        case 'ADD_RATE_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
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
        daysAndHoursReducer,
        rateReducer,
        modalWindowReducer,
        currentOrderIdReducer,
        loginReducer,
        currentOrderReducer,
        deleteCurrentOrderReducer
    }
)