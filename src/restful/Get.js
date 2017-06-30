import Strings from '../res/values/string'
import 'whatwg-fetch';
import * as _ from "underscore";
/**
 * Created by t-zikfan on 2017/6/30.
 * Get request
 */

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

function parseJSON(response) {
    return response.json()
}
export default function (url, config) {
    console.log("Fetch from " + Strings.serverAddr + url);
    /**
     * @param config other configs
     */
    _.defaults(config, {
        noCache: false,
        raw: false,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return fetch(Strings.serverAddr + url, config)
        .then(checkStatus)
        .then(parseJSON)
        .then(function(response) {
            console.log('Request succeeded with JSON response', response);
            return response;
        }).catch(function(error) {
            console.log('Request failed', error);
            return null;
        })
}
