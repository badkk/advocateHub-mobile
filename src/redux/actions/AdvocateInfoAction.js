const Codebird = require("codebird");
let cb = new Codebird;

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
export function followTtActionCreator(followStatus, twitterName) {
    console.log(followStatus, twitterName);
    return dispatch => {
        //lookUpTwitterRelationship(twitterName, dispatch);
        //continue;
    }
}
export const followGhAction = {
    type: FOLLOW_GH
};
export function initialActionCreator() {
    /*return dispatch=> {
        lookUpTwitterRelationship(twitterName, dispatch)
    }*/
    return dispatch => {
        initPage(dispatch);
    }
}
function handleTwitterFollowed(res) {
    console.log(res);
    return ({
        type: INITIAL,
        followedTt: true
    });
}
function initPage(dispatch) {
    /*cb.setConsumerKey("O1p1W7B2UZC4fy16gb4QiLb4K", "GKE8IQVGCOveOQsZxS3dse4dm0wqY7l4ui05OPczMPHD3hO3zC");
    // gets a request token
    //let oauth_token = localStorage.getItem("oauth_token");
    //let oauth_token_secret = localStorage.getItem("oauth_token_secret");
    //if (oauth_token && oauth_token_secret) {
    //    cb.setToken(oauth_token, oauth_token_secret);
    //} else {
    cb.__call(
        "oauth/requestToken",
        {
            oauth_callback: "oob"
        },
        function (reply, rate, err) {
            if (err) {
                console.log("error response or timeout exceeded" + err.error);
            }
            if (reply) {
                // store the authenticated token, which may be different from the request token (!)
                console.log(reply);
                if (reply.oauth_callback_confirmed) {
                    cb.setToken(reply.oauth_token, reply.oauth_token_secret);
                    cb.__call(
                        "oauth_authenticate",
                        {},
                        function (auth_url) {
                            window.codebird_auth = window.open(auth_url);
                            localStorage.setItem("oauth_token", reply.oauth_token);
                            localStorage.setItem("oauth_token_secret", reply.oauth_token_secret);
                        }
                    );
                }
            }
        }
    );*/
    //}
    /*if (isFollow) {
        handleTwitterFollowEvent(twitterName, dispatch);
    } else {
        handleTwitterUnfollowEvent(twitterName, dispatch);
    }*/
    //init twitter js
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
    window.twttr.ready(function (twttr) {
        twttr.events.bind("follow", (res) => dispatch(handleTwitterFollowed(res)))
    })
    //init github js
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);
}
function lookUpTwitterRelationshipCallback(reply) {
    console.log(reply);
    let status = false;
    if (typeof reply[0] === 'undefined') {
        status = false;
    } else if (reply[0].connections[0] === 'none'){
        status = false;
    } else {
        status = true;
    }
    return {
        type: FOLLOW_TT,
        followedTt: status
    }
}
function handleTwitterFollowEventCallback(reply) {
    console.log(reply);
    let status = typeof reply !== 'undefined' && typeof reply.errors === 'undefined';
    return {
        type: FOLLOW_TT,
        success: status
    }
}
function handleTwitterUnfollowEventCallback(reply) {
    console.log(reply);
    let status = typeof reply === 'undefined' && typeof reply.errors === 'undefined';
    return {
        type: UNFOLLOW_TT,
        success: status
    }
}
function lookUpTwitterRelationship(twitterName, dispatch) {
    return cb.__call(
        "friendships/lookup",
        {
            "screen_name" : twitterName
        },
        (res) => dispatch(lookUpTwitterRelationshipCallback(res))
    );
}
function handleTwitterFollowEvent(twitterName, dispatch) {
    //initial twitter account seetings
    cb.__call(
        "friendships/create",
        {
            "screen_name" : twitterName
        },
        (res) => dispatch(handleTwitterFollowEventCallback(res))
    );
}
function handleTwitterUnfollowEvent(twitterName, dispatch) {
    //initial twitter account seetings
    cb.__call(
        "friendships/destroy",
        {
            "screen_name" : twitterName
        },
        (res) => dispatch(handleTwitterUnfollowEventCallback(res))
    );
}