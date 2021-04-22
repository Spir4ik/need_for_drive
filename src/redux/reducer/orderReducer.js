const initialStateOrder = {
    orderStatusId: {name: "new", id: "5e26a191099b810b946c5d89"},
    cityId: {},
    pointId: {},
    carId: {},
    color: '',
    price: 0,
    dateFrom: Date.parse(new Date()),
    dateTo: 0,
    rateId: {},
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false
};

export default function storeReducer(state = initialStateOrder, action) {
    switch (action.type) {
        case 'ADD_CITY_IN_STORE':
            return {
                ...state,
                cityId: action.payload.cityId,
                pointId: {},
                carId: {},
                color: '',
                price: 0,
                dateFrom: Date.parse(new Date()),
                dateTo: 0,
                rateId: {},
                isFullTank: false,
                isNeedChildChair: false,
                isRightWheel: false,
            };
        case 'ADD_POINT_IN_STORE':
            return {
                ...state,
                pointId: action.payload.pointId
            };
        case 'ADD_CAR_IN_STORE':
            return {
                ...state,
                carId: action.payload.carId,
                color: '',
                price: 0,
                dateFrom: Date.parse(new Date()),
                dateTo: 0,
                rateId: {},
                isFullTank: false,
                isNeedChildChair: false,
                isRightWheel: false,
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
                price: !state.isFullTank ? state.price + 500 : state.price - 500,
            };
        case 'ADD_CHAR_IN_STORE':
            return {
                ...state,
                isNeedChildChair: !state.isNeedChildChair,
                price: !state.isNeedChildChair ? state.price + 200 : state.price - 200,
            };
        case 'ADD_RIGHT_HAND_DRIVE':
            return {
                ...state,
                isRightWheel: !state.isRightWheel,
                price: !state.isRightWheel ? state.price + 1600 : state.price - 1600,
            };
        default:
            return state;
    }
}