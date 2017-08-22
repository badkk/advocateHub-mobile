import get from '../../restful/Get'

/**
 * Created by t-zikunfan
 * Date: 9:55 2017/8/22
 */
export const INITIAL = "INITIAL_DETAIL";
export const GETDOCS = "INITIAL_DOCS_INFOS";

export function getTalkDetailActionCreator(talkId) {
    return dispatch => get('/meeting/' + talkId).then(res => {
        dispatch(setTalkState(res['data']))
    });
}

export function getDocsActionCreator() {
    return dispatch => get('/azure/infos').then(res => {
        dispatch(setDocsInfoState(res['data']))
    })
}

function setTalkState(talkDetails) {
    return {
        type: INITIAL,
        talk: talkDetails,
        advocate: talkDetails.advocator
    }
}

function setDocsInfoState(docs) {
    return {
        type: GETDOCS,
        docs: docs
    }
}