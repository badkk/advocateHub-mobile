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
    console.log(response);
    return response.json()
}
export default function (baseUrl=Strings.serverAddr, url, config) {
    console.log("Fetch from " + baseUrl + url);
    /**
     * @param config other configs
     */
    _.defaults(config, {
        noCache: false,
        raw: false,
        mode: 'no-cors',
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'mode': 'no-cors'
        }
    });
    return fetch(baseUrl + url, config)
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
