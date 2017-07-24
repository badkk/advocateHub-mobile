import React, {Component} from 'react'
import { RaisedButton } from 'material-ui'
import AdminAppBar from "../commons/AdminAppBar";
import get from '../../restful/Get';
import post from '../../restful/Post';
import * as _ from 'oauthio-web'
/**
 * Created by t-zikunfan
 * Date: 15:33 2017/7/24
 */
const oauth_publicKey = "UoZcf38FRDbJvk5lz7fSNXUE51Q";
const consumer_key = "BDOZCyUcJF2uL4dASNiEnsrs2";
const consumer_secret = "GKE8IQVGCOveOQsZxS3dse4dm0wqY7l4ui05OPczMPHD3hO3zC";
const callback_url = "https://127.0.0.1:3000/admin/login";
export default class AdvocateTwitterLogin extends Component {
    constructor(props) {
        super(props);
        this.handleTwitterOAuth = this.handleTwitterOAuth.bind(this);
        this.state = {
            history: this.props.history
        }
    }
    componentDidMount() {
    }
    handleTwitterOAuth() {
        _.OAuth.initialize(oauth_publicKey);
        _.OAuth.popup('twitter', {cache: true}).done(function(oauthResult) {
            //make API calls with `twitter`
            console.log('oAuth success!');
            oauthResult.me().done(function(data) {
                console.log(data);
                post('/user/login', JSON.stringify(data)).then(res => {
                    if (res['data'] == true) {
                        this.state.history.push('/admin')
                    }
                });
            });
        }).fail(function(err) {
            //todo when the OAuth flow failed
            console.log(err)
        })
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