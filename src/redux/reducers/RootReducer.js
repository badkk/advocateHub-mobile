import {combineReducers} from 'redux'
import AdvocateInfoReducer from './AdvocateInfoReducer'
import HomeReducer from './HomeReducer'
import TalkDetailReducer from './TalkDetailReducer'
import {CounterReducer} from '../../presenters/Test'
/**
 * Created by t-zikfan on 2017/7/13.
 * All Reducers
 */

const rootReducer = combineReducers({
    advocateInfoReducer: AdvocateInfoReducer,
    homeReduce: HomeReducer,
    talkDetailReducer: TalkDetailReducer,
    counterReducer: CounterReducer
});

export default rootReducer;