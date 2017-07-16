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
    if (followStatus === true) {
        return dispatch => {
            handleTwitterUnfollowEvent(twitterName, dispatch);
        }
    } else {
        return dispatch=> {
            handleTwitterFollowEvent(twitterName, dispatch)
        }
    }
};
export const followGhAction = {
    type: FOLLOW_GH
};
export function initialActionCreator(twitterName) {
    return dispatch=> {
        lookUpTwitterRelationship(twitterName, dispatch)
    }
}
function initTwitter() {
    cb.setConsumerKey("rUSunMlRwYz5pqNtDpFMpyGiD", "KjRuDPBqZQyu9ojO9tMrjclGDZrx8XJIRyffvxPgOZ4u6w1VgF");
    cb.setToken("1284688014-ltPL0wlZHMQTGPDaokYGV2GfhjtqRYtdz4Beckb", "LTQq1J3hStlkx6CJEEsDaaBNrbAdeGLLJTTVH5fqaKs6L");
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
        type: INITIAL,
        followedTt: status
    }
}
function handleTwitterFollowEventCallback(reply) {
    console.log(reply);
    let status = false;
    if (typeof reply !== 'undefined') {
        //success
        status = true;
    } else {
        status = false;
    }
    return {
        type: FOLLOW_TT,
        success: status
    }
}
function handleTwitterUnfollowEventCallback(reply) {
    console.log(reply);
    let status = false;
    if (typeof reply !== 'undefined') {
        //success
        status = false;
    } else {
        status = true;
    }
    return {
        type: UNFOLLOW_TT,
        success: status
    }
}
function lookUpTwitterRelationship(twitterName, dispatch) {
    initTwitter();
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
    initTwitter();
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
    initTwitter();
    cb.__call(
        "friendships/destroy",
        {
            "screen_name" : twitterName
        },
        (res) => dispatch(handleTwitterUnfollowEventCallback(res))
    );
}