import get from '../../restful/Get'
/**
 * Created by t-zikfan on 2017/7/13.
 */
//define action types
export const OPEN_BS = 'OPEN_BS';
export const CLOSE_BS = 'CLOSE_BS';
export const FOLLOW_FB = 'FOLLOW_FB';
export const FOLLOW_TT = 'FOLLOW_TT';
export const UNFOLLOW_TT = 'UNFOLLOW_TT';
export const FOLLOW_GH = 'FOLLOW_GH';
export const INITIAL = 'INITIAL';

//actions
export const openBSAction = {
    type: OPEN_BS,
};
export const closeBSAction = {
    type: CLOSE_BS
};
export const followFbAction = {
    type: FOLLOW_FB
};
export const followGhAction = {
    type: FOLLOW_GH
};
export function followTtActionCreator(followStatus, twitterName) {
    console.log(followStatus, twitterName);
    return dispatch => {
    }
}
export function initialActionCreator(userId, dispatch) {
    //init twitter
    window.twttr = (function(d, s, id) {
        let js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
            t._e.push(f);
        };

        return t;
    }(document, "script", "twitter-wjs"));
    //init github js
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);

    return dispatch => {
        get('/advocator/' + userId).then(res => {
            console.log("from advacation redux action", res);
            dispatch(initState(res['data']))
        });
    }
}
function initState(data) {
    return {
        type: INITIAL,
        avatar: data['avatar'],
        homePage: data['homePage'],
        facebookHomePage: data['facebookAccount'],
        twitterName: data['alias'],
        name: data['name'],
        githubHomePage: data['githubAccount'],
        meetings: data['meetings'],
        tags: data['tags'].join(',')
    }
}