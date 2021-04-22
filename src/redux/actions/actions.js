export const showModalWindow = () => ({
    type: 'SHOW_MODAL_WINDOW'
});

export const addCityInStore = cityId => ({
    type: 'ADD_CITY_IN_STORE',
    payload: {
        cityId
    }
});

export const addPointInStore = pointId => ({
    type: 'ADD_POINT_IN_STORE',
    payload: {
        pointId
    }
});

export const addCarInStore = carId => ({
    type: 'ADD_CAR_IN_STORE',
    payload: {
        carId
    }
});

export const addColorInStore = color => ({
    type: 'ADD_COLOR_IN_STORE',
    payload: {
        color
    }
});

export const addPriceInStore = price => ({
    type: 'ADD_PRICE_IN_STORE',
    payload: {
        price
    }
});

export const addDateFromInStore = dateFrom => ({
    type: 'ADD_DATE_FROM_IN_STORE',
    payload: {
        dateFrom
    }
});

export const addDateToInStore = dateTo => ({
    type: 'ADD_DATE_TO_IN_STORE',
    payload: {
        dateTo
    }
});

export const addRateInStore = rateId => ({
    type: 'ADD_RATE_IN_STORE',
    payload: {
        rateId
    }
});

export const addTankInStore = () => ({
    type: 'ADD_TANK_IN_STORE'
});

export const addCharInStore = () => ({
    type: 'ADD_CHAR_IN_STORE'
});

export const addRightHandDrive = () => ({
    type: 'ADD_RIGHT_HAND_DRIVE'
})

export const addCategoryId = categoryId => ({
    type: 'ADD_CATEGORY_ID',
    payload: {
        categoryId
    }
});

export const addDaysAndHours = (days, hours) => ({
    type: 'ADD_DAYS_AND_HOURS',
    payload: {
        days,
        hours
    }
});