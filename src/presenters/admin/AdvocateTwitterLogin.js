import React, {Component} from 'react'
import { RaisedButton, CircularProgress } from 'material-ui'
import AdminAppBar from "../commons/AdminAppBar";
import post from '../../restful/Post';
import login from '../../utils/loginUtils'
import '../../styles/AdvocateTwitterLogin.css'
import {oAuthTwitterInit, twitterLogin} from '../../utils/socialMedUtils'
/**
 * Created by t-zikunfan
 * Date: 15:33 2017/7/24
 */
export default class AdvocateTwitterLogin extends Component {
    constructor(props) {
        super(props);
        this.handleTwitterOAuth = this.handleTwitterOAuth.bind(this);
        this.state = {
            history: this.props.history,
            loadRuning: false
        }
    }
    componentWillMount() {
        oAuthTwitterInit();
    }
    handleTwitterOAuth() {
        const history = this.state.history;
        const success = (data) => {
            const id = data['id'];
            console.log("personalInfo", data);
            login(
                id,
                (res) => history.push('/admin/'+id),
                (res) => {
                    post('/advocator/login', data).then(res => {
                        if(res['data'] === true)
                            history.push('/admin/' + id + '/infocheck')
                    });
                }
            );
            this.setState({
                loadRuning: false
            });
        };
        const failed = () => {
            console.log("login failed");
        };
        /*that.setState({
           loadRuning: true
        });
        const oauth = OAuth({
            consumer: {
                key: consumer_key,
                secret: consumer_secret
            },
            signature_method: 'HMAC-SHA1',
            hash_function: function(base_string, key) {
                return crypto.createHmac('sha1', key).update(base_string).digest('base64');
            }
        });
        _.OAuth.initialize(oauth_publicKey);
        _.OAuth.popup('twitter', {cache: true})
            .done(function(oauthResult) {
            //make API calls with `twitter`
            console.log('oAuth success!');
            oauthResult.me().done(function(data) {
                const id = data['id'];
                console.log(data);
                login(
                    id,
                    (res) => history.push('/admin/'+id),
                    (res) => {
                        post('/advocator/login', data).then(res => {
                            if(res['data'] === true)
                                history.push('/admin/' + id + '/infocheck')
                        });
                    }
                );
                that.setState({
                    loadRuning: false
                });
            });
        }).fail(function(err) {
            //todo when the OAuth flow failed
            console.log(err)
        })*/
        twitterLogin(success, failed);
    }

    render() {
        return (
            <div className="twitter-login-panel">
                <AdminAppBar history={this.props.history}/>
                <RaisedButton label="Sign in with Twitter" onTouchTap={this.handleTwitterOAuth} primary={true}/>
                <CircularProgress
                    size={65}
                    thickness={5}
                    style={{
                        position: 'absolute',
                        padding:'20% 48% 20% 48%',
                        background: 'rgba(47, 47, 47, 0.4)',
                        width: '100%',
                        height: '100%',
                        zIndex: 200,
                        display: this.state.loadRuning ? "inline-block" : "none"
                    }}
                />
            </div>
        );
    }
}