import get from '../restful/Get'
import React from "react";
let hello = require('hellojs/dist/hello.all.js');

/**
 * Created by t-zikunfan
 * Date: 14:14 2017/8/8
 */
const consumer_key = "tcLQOx7jmKGKWlKYYDe8OD5XG";
export function oAuthInit() {
    hello.init({
        twitter: consumer_key
    }, {
        redirect_uri: null
    });
}
export function oAuthLogin(successCallback, failedCallback) {
    const twitter = hello('twitter');
    twitter.login().then(function(res) {
        // Get Profile
        return twitter.api('me');
    }, failedCallback).then(function(res){
        // change basic json
        res.id = res.id.toString();
        res.avatar = res.profile_image_url;
        res.alias = res.screen_name;
        successCallback(res);
    }, failedCallback);
}