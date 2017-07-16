import {OPEN_BS, CLOSE_BS, FOLLOW_TT, UNFOLLOW_TT, FOLLOW_GH, FOLLOW_FB, INITIAL} from '../actions/AdvocateInfoAction'
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
    followedGh: false,
    facebookHomePage: 'https://www.facebook.com/papajohns/',
    twitterName: 'John_Papa',
    followedTt: false,

};

export default (state=initialStates, action) => {
    const followFbStatus = state.followedFb;
    const followGhStatus = state.followedGh;
    const followTtStatus = state.followedTt;
    switch(action.type) {
        case INITIAL:
            return Object.assign({}, state, {
               followedTt: action.followedTt,
            });
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
                followedTt: action.success,
            });
        case UNFOLLOW_TT:
            return Object.assign({}, state, {
                followedTt: action.success,
            });
        case FOLLOW_GH:
            return Object.assign({}, state, {
                followedGh: !followGhStatus,
            });
        default:
            return state;
    }
}