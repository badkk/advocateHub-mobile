import {combineReducers} from 'redux'
import AdvocateInfoReducer from './AdvocateInfoReducer'
import {CounterReducer} from '../../presenters/Test'
/**
 * Created by t-zikfan on 2017/7/13.
 * All Reducers
 */

const rootReducer = combineReducers({
    advocateInfoReducer: AdvocateInfoReducer,
    counterReducer: CounterReducer
});

export default rootReducer;