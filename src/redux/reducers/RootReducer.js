import {combineReducers} from 'redux'
import AdvocateInfoReducer from './AdvocateInfoReducer'
import HomeReducer from './HomeReducer'
import {CounterReducer} from '../../presenters/Test'
/**
 * Created by t-zikfan on 2017/7/13.
 * All Reducers
 */

const rootReducer = combineReducers({
    advocateInfoReducer: AdvocateInfoReducer,
    homeReduce: HomeReducer,
    counterReducer: CounterReducer
});

export default rootReducer;