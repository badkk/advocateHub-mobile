import {OPEN_BS, CLOSE_BS, FOLLOW_TT, FOLLOW_GH, FOLLOW_FB} from '../actions/AdvocateInfoAction'
/**
 * Created by t-zikfan on 2017/7/13.
 * Reducers of AdvocateHub
 */
//state
/* global FB */
const initialStates = {
    loading: true,
    isOpen: false,
    followedFb: false,
    followedTt: false,
    followedGh: false,
    facebookHomePage: 'https://www.facebook.com/papajohns/'
};

export default (state=initialStates, action) => {
    const followFbStatus = state.followedFb;
    const followGhStatus = state.followedGh;
    const followTtStatus = state.followedTt;
    switch(action.type) {
        case OPEN_BS:
            return Object.assign({}, state, {isOpen: true});
        case CLOSE_BS:
            return Object.assign({}, state, {isOpen: false});
        case FOLLOW_FB:
            return Object.assign({}, state, {
                followedFb: !followFbStatus,
            });
        case FOLLOW_TT:
            return Object.assign({}, state, {
                followedTt: !followTtStatus,
            });
        case FOLLOW_GH:
            return Object.assign({}, state, {
                followedGh: !followGhStatus,
            });
        default:
            return state;
    }
}