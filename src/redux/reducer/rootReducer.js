import { combineReducers } from 'redux';
import storeReducer from "./orderReducer";
import cityReducer from "./cityReducer";
import pointReducer from "./pointReducer";
import categoryReducer from "./categoryReducer";
import carsReducer from "./carsReducer";
import rateReducer from "./rateReducer";
import currentOrderIdReducer from "./currentOrderIdReducer";
import loginReducer from "./loginReducer";
import currentOrderReducer from "./currentOrderReducer";
import deleteCurrentOrderReducer from "./deleteOrderReducer";
import categoryIdReducer from "./categoryIdReducer";
import daysAndHoursReducer from "./daysAndHoursReducer";
import modalWindowReducer from "./modalWindowReducer";

export default combineReducers(
    {
        storeReducer,
        cityReducer,
        pointReducer,
        categoryReducer,
        carsReducer,
        rateReducer,
        currentOrderIdReducer,
        loginReducer,
        currentOrderReducer,
        deleteCurrentOrderReducer,
        categoryIdReducer,
        daysAndHoursReducer,
        modalWindowReducer
    }
)