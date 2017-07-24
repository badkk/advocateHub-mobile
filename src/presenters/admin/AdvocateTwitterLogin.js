import React, {Component} from 'react'
import { RaisedButton } from 'material-ui'
import AdminAppBar from "../commons/AdminAppBar";
import post from '../../restful/Post';
/**
 * Created by t-zikunfan
 * Date: 15:33 2017/7/24
 */
const consumer_key="O1p1W7B2UZC4fy16gb4QiLb4K";
const consumer_secret = "GKE8IQVGCOveOQsZxS3dse4dm0wqY7l4ui05OPczMPHD3hO3zC";
const callback_url = "http://127.0.0.1:3000/admin/login";
export default class AdvocateTwitterLogin extends Component {
    constructor(props) {
        super(props);
        this.handleTwitterOAuth = this.handleTwitterOAuth.bind(this);
    }
    componentDidMount() {
    }
    handleTwitterOAuth() {
        /*const oa = new OAuth(
            "https://api.twitter.com/oauth/request_token",
            "https://api.twitter.com/oauth/access_token",
            consumer_key,
            consumer_secret,
            "1.0",
            callback_url,
            "HMAC-SHA1",
            {
                'Cache-Control':"no-cache",
                'Access-Control-Allow-Origin': '*://!*!/!*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': 'Content-Type, Accept',

            }
        );
        console.log(oa);
        oa.getOAuthRequestToken(function (error, oAuthToken, oAuthTokenSecret, results) {
            console.log(results);
            let authURL = 'https://twitter.com/' +
                'oauth/authenticate?oauth_token=' + oAuthToken;
        });*/

    }
    render() {
        return (
            <div>
                <AdminAppBar history={this.props.history} dark={true}/>
                <RaisedButton label="Sign in with Twitter" onTouchTap={this.handleTwitterOAuth} primary={true}/>
            </div>
        );
    }
}