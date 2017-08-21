import get from '../../restful/Get'
/**
 * Created by t-zikfan on 2017/7/13.
 */
//define action types
export const INITIAL = 'INITIAL';

export function initialActionCreator(userId) {
    return dispatch => {
        get('/advocator/' + userId).then(res => {
            dispatch(initState(res['data']))
        });
    }
}
function initState(data) {
    let res = {
        type: INITIAL,
        avatar: data['avatar'],
        homePage: data['homePage'],
        facebookHomePage: data['facebookAccount'],
        twitterAccount: data['twitterAccount'],
        name: data['name'],
        githubAccount: data['githubAccount'],
        meetings: data['meetings'],
        tags: data['tags'] ? data['tags'].join(', ') : '',
        likedNum: data['likedNum'],
        popularity: 'popularity' in data ? data['popularity'] : 0,
        followersCount: 'followersCount' in data ? data['followersCount'] : 0,
    };
    if ('linkedin' in data) {
        const linkedin = data.linkedin;
        res.location = linkedin.location.name;
        res.positions = linkedin.positions.values;
        res.summary = linkedin.summary;
        res.linkedinAccount = linkedin.publicProfileUrl;
        res.jobtitle=linkedin.headline;
    }
    return res;
}
