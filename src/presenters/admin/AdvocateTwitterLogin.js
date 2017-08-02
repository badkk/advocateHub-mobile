import React, {Component} from 'react'
import { RaisedButton, CircularProgress } from 'material-ui'
import AdminAppBar from "../commons/AdminAppBar";
import post from '../../restful/Post';
import login from '../../utils/loginUtils'
import * as _ from 'oauthio-web'
import '../../styles/AdvocateTwitterLogin.css'

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
            history: this.props.history,
            loadRuning: false
        }
    }
    componentDidMount() {
    }
    handleTwitterOAuth() {
        const history = this.state.history;
        const that = this;
        that.setState({
           loadRuning: true
        });
        _.OAuth.initialize(oauth_publicKey);
        _.OAuth.popup('twitter', {cache: true}).done(function(oauthResult) {
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
        })
    }

    render() {
        return (
            <div className="login-panel">
                <AdminAppBar history={this.props.history}/>
                <RaisedButton label="Sign in with Twitter" onTouchTap={this.handleTwitterOAuth} primary={true}/>
                <CircularProgress
                    size={65}
                    thickness={5}
                    style={{position: 'absolute', padding:'45%', display: this.state.loadRuning ? "inline-block" : "none"}}
                />
            </div>
        );
    }
}