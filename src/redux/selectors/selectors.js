export default (useSelector) => {
    return {
        store: useSelector(state => state.storeReducer),
        currentDays: useSelector(state => state.daysAndHoursReducer.days),
        currentHours: useSelector(state => state.daysAndHoursReducer.hours),
        orderId: useSelector(state => state.currentOrderIdReducer),
        daysAndHours: useSelector(state => state.daysAndHoursReducer),
        category: useSelector(state => state.categoryReducer.category),
        categoryId: useSelector(state => state.categoryIdReducer),
        cities: useSelector(state => state.cityReducer),
        points: useSelector(state => state.pointReducer),
        rate: useSelector(state => state.rateReducer.rate),
        cars: useSelector(state => state.carsReducer.car),
        modalWindowStatus: useSelector(state => state.modalWindowReducer),
        token: useSelector(state => state.loginReducer.accessToken),
    }
}