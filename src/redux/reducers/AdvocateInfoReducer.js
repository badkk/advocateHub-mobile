import {INITIAL} from '../actions/AdvocateInfoAction'
/**
 * Created by t-zikfan on 2017/7/13.
 * Reducers of AdvocateHub
 */
//state
/* global FB */
const initialStates = {
    loading: true,
    facebookHomePage: '',
    twitterAccount: '',
    githubAccount: '',
    homePage: '',
    avatar: '',
    meetings: [],
    tags: [],
    name: '',
    likedNum: 0,
    linkedinAccount: '',
    popularity: 0,
    followersCount: 0,
    location: '',
    summary: '',
    positions: [],
    jobtitle: ''

};

export default (state=initialStates, action) => {
    switch(action.type) {
        case INITIAL:
            return Object.assign({}, state, {
                homePage: action.homePage,
                facebookHomePage: action.facebookHomePage,
                twitterAccount: action.twitterAccount,
                githubAccount: action.githubAccount,
                avatar: action.avatar,
                meetings: action.meetings,
                tags: action.tags,
                name: action.name,
                likedNum: action.likedNum,
                popularity: action.popularity,
                linkedinAccount: action.linkedinAccount,
                location: action.location,
                summary: action.summary,
                positions: action.positions,
                followersCount: action.followersCount,
                jobtitle: action.jobtitle
            });
        default:
            return state;
    }
}