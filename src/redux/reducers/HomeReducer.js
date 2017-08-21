import {INITIALADVOS, INITIALTALKS} from '../actions/HomeAction'

/**
 * Created by t-zikunfan
 * Date: 17:03 2017/8/21
 */
const initialStates = {
    talks: [],
    upcomingTalks: [],
    advocates: [],
    topAdvocates: [],
    advocatesWithTags: {}
};

export default (state=initialStates, action) => {
    switch(action.type) {
        case INITIALADVOS:
            return Object.assign({}, state, {
                talks: action.talks,
                upcomingTalks: action.upcomingTalks,
                advocates: action.advocates,
                topAdvocates: action.topAdvocates,
                advocatesWithTags: action.advocatesWithTags
            });
        case INITIALTALKS:
            return Object.assign({}, state, {
                talks: action.talks,
                upcomingTalks: action.upcomingTalks,
            });
        default:
            return state;
    }
}