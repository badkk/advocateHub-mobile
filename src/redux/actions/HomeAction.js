import get from '../../restful/Get'
import * as _ from 'underscore'

/**
 * Created by t-zikunfan
 * Date: 16:35 2017/8/21
 */
export const INITIALADVOS = 'GET_ADVOS';
export const INITIALTALKS = 'GET_TALKS';

export function initialAdvocatesCreators() {
    return dispatch => {
        get('/advocators').then(res => {
            dispatch(initAdvosStates(res['data']))
        });
    }
}
export function initialTalksCreators() {
    return dispatch => {
        get('/meetings').then(res => {
            dispatch(initTalksStates(res['data']))
        });
    }
}
function advoWithTags(advos) {
    let advocatorsWithTags = {};
    const pushTagFunc = (tag, item) => {
        if(tag in advocatorsWithTags) {
            advocatorsWithTags[tag].push(item);
        } else {
            advocatorsWithTags[tag] = [];
            advocatorsWithTags[tag].push(item);
        }
    };
    let advocatorWithoutTags = [];
    _.each(advos, (advo) => {
        if ('tags' in advo) {
            _.each(advo.tags, (tag) => {
                pushTagFunc(tag, advo);
            })
        } else {
            advocatorWithoutTags.push(advo);
        }
    });
    //if not empty
    if (!_.isEmpty(advocatorWithoutTags)) advocatorsWithTags['Others'] = advocatorWithoutTags;
    return advocatorsWithTags;
}
function initAdvosStates(advos) {
    return {
        type: INITIALADVOS,
        advocates: advos,
        topAdvocates: _.first(_.sortBy(_.filter(advos, advo => advo.popularity), advo => advo.popularity * -1), 10),
        advocatesWithTags: advoWithTags(advos)
    };
}
function initTalksStates(talks) {
    return {
        type: INITIALTALKS,
        talks: talks,
        upcomingTalks: _.sortBy(_.filter(talks, talk => talk.date > Date.now()), talk => talk.date),
    }
}