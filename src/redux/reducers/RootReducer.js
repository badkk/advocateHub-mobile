import {combineReducers} from 'redux'
import AdvocateInfoReducer from './AdvocateInfoReducer'
import HomeReducer from './HomeReducer'
import TalkDetailReducer from './TalkDetailReducer'
/**
 * Created by t-zikfan on 2017/7/13.
 * All Reducers
 */

const rootReducer = combineReducers({
    advocateInfoReducer: AdvocateInfoReducer,
    homeReduce: HomeReducer,
    talkDetailReducer: TalkDetailReducer,
});

export default rootReducer;