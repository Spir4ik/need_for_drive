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
    }, {
            cityId: {},
            pointId: {}
        }
)

export default combineReducers({
    order
})