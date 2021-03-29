import {combineReducers} from "redux";
import { handleActions } from 'redux-actions';
import * as actions from '../actions'

const order = handleActions({
        [actions.getCity](state, {payload: { cityId }}) {
            return{
                ...state,
                cityId
            }
        },
        [actions.getPoint](state, {payload: { pointId }}) {
            return{
                ...state,
                pointId
            }
        },
        [actions.getCar](state, {payload: { carId }}) {
            return{
                ...state,
                carId
            }
        }
    }, {
            cityId: {},
            pointId: {},
            carId: {},
        }
);

export default combineReducers({
    order
})