import {combineReducers} from "redux";
import { handleActions } from 'redux-actions';
import * as actions from '../actions'

const order = handleActions({
        [actions.getOrder](state, {payload: {
            orderStatusId, cityId, pointId,
            carId, color, dateFrom,
            dateTo, rateId, price,
            isFullTank = true, isNeedChildChair = true, isRightWheel = true
        }}) {
            return {
                orderStatusId,
                cityId,
                pointId,
                carId,
                color,
                dateFrom,
                dateTo,
                rateId,
                price,
                isFullTank,
                isNeedChildChair,
                isRightWheel
            }
        }
    }, {}
)

export default combineReducers({
    order
})