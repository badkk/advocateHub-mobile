import {OPEN_BS, CLOSE_BS, FOLLOW_TT, FOLLOW_GH, FOLLOW_FB} from '../actions/AdvocateInfoAction'
/**
 * Created by t-zikfan on 2017/7/13.
 * Reducers of AdvocateHub
 */
//state
const initialStates = {
    loading: true,
    isOpen: false,
    followedFb: false,
    followedTt: false,
    followedGh: false,
    unFollowedCount: 3
};
function handleUnfollowCount(flag, count) {
    return flag ? -- count : ++ count;
}
function facebookLoginAction () {

}
export default (state=initialStates, action) => {
    const followFbStatus = state.followedFb;
    const followGhStatus = state.followedGh;
    const followTtStatus = state.followedTt;
    const unFollowedCount = state.unFollowedCount;
    console.log(followGhStatus);
    switch(action.type) {
        case OPEN_BS:
            return Object.assign({}, state, {isOpen: true});
        case CLOSE_BS:
            return Object.assign({}, state, {isOpen: false});
        case FOLLOW_FB:
            return Object.assign({}, state, {
                followedFb: !followFbStatus,
                unFollowedCount: handleUnfollowCount(!followFbStatus, unFollowedCount)
            });
        case FOLLOW_TT:
            return Object.assign({}, state, {
                followedTt: !followTtStatus,
                unFollowedCount: handleUnfollowCount(!followTtStatus, unFollowedCount)
            });
        case FOLLOW_GH:
            return Object.assign({}, state, {
                followedGh: !followGhStatus,
                unFollowedCount: handleUnfollowCount(!followGhStatus, unFollowedCount)
            });
        default:
            return state;
    }
}