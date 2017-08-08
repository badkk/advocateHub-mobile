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
    /*hello.on('auth.login', function(auth) {
        console.log(auth);
        // Call user information, for the given network
        hello('twitter').api('me').then(function(r) {
            // Inject it into the container
            console.log(r);
            let label = document.getElementById('profile_' + auth.network);
            if (!label) {
                label = document.createElement('div');
                label.id = 'profile_' + auth.network;
                document.getElementById('profile').appendChild(label);
            }
            label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;
        });
    });*/
}
export function oAuthLogin(successCallback, failedCallback) {
    const twitter = hello('twitter');
    twitter.login().then(function(res) {
        // Get Profile
        return twitter.api('me');
    }, failedCallback).then(function(res){
        // Put in page
        successCallback(res);
    }, failedCallback);
}