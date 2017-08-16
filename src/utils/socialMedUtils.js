import get from '../restful/Get'
import React from "react";
let hello = require('hellojs/dist/hello.all.js');

/**
 * Created by t-zikunfan
 * Date: 14:14 2017/8/8
 */
const twitter_consumer_key = "tcLQOx7jmKGKWlKYYDe8OD5XG";
const linkedin_consumer_key = "814gwztxv1quwb";
export function oAuthTwitterInit() {
    hello.init({
        twitter: twitter_consumer_key
    }, {
        redirect_uri: '/admin/callback'
    });
}
export function oAuthLinkedinInit() {
    hello.init({
        linkedin: linkedin_consumer_key
    }, {
        redirect_uri: '/admin/callback'
    });
}
export function twitterLogin(successCallback, failedCallback) {
    const twitter = hello('twitter');
    twitter.login().then(res => {
        // Get Profile
        return twitter.api('me');
    }, failedCallback).then(res => {
        // change basic json
        let newRes = {};

        newRes.id = res.id_str;
        newRes.avatar = res.profile_image_url;
        newRes.twitterAccount = res.screen_name;
        newRes.name = res.name;
        newRes.followersCount = res.followers_count;
        newRes.popularity = res.favourites_count;

        successCallback(newRes);
    }, failedCallback);
}
export function tweet(text, url, successCallback, failedCallback) {
    const twitter = hello('twitter');
    const title = '#AdvocateHub I\'v just publish a talk - ' + text + ' !';
    twitter.api('me/share', 'POST', {
        message: title,
        link: url,
    }).then(res => {
        console.log(res);
        successCallback(res);
    }, failedCallback)
}
export function linkedinAccess(successCallback, failedCallback) {
    const linkedin = hello('linkedin');
    linkedin.login().then(res => {
        console.log(res);
        return linkedin.api(
            'people/~:(picture-url,first-name,last-name,id,formatted-name,email-address,industry,summary,positions,public-profile-url,specialties,location,headline,skills,educations)'
        );
    }, failedCallback).then(res => {
        successCallback(res);
    }, failedCallback);
}