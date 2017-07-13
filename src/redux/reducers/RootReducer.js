import {combineReducers} from 'redux'
import AdvocateInfoReducer from './AdvocateInfoReducer'
/**
 * Created by t-zikfan on 2017/7/13.
 * All Reducers
 */

const rootReducer = combineReducers({
    advocateInfoReducer: AdvocateInfoReducer
});

export default rootReducer;