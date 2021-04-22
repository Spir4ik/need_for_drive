const initialStateDaysAndHours = {
    days: 0,
    hours: 0
};

export default function daysAndHoursReducer(state = initialStateDaysAndHours, action) {
    if (action.type === 'ADD_DAYS_AND_HOURS') {
        return {
            ...state,
            days: action.payload.days,
            hours: action.payload.hours,
        }
    }
    return state;
}