import {INITIAL, GETDOCS} from "../actions/TalkDetailAction";
/**
 * Created by t-zikunfan
 * Date: 9:55 2017/8/22
 */
const initialStates = {
    talk: {},
    advocate: {},
    docs: []
};

export default (state=initialStates, action) => {
    switch(action.type) {
        case INITIAL:
            return Object.assign({}, state, {
                talk: action.talk,
                advocate: action.advocate,
            });
        case GETDOCS:
            return Object.assign({}, state, {
                docs: action.docs
            });
        default:
            return state;
    }
}