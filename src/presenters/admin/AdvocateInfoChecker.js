import React, {Component} from 'react'
import {CircularProgress, RaisedButton, Paper, Avatar, TextField} from 'material-ui'
import post from '../../restful/Post'
import ChipInput from 'material-ui-chip-input'
import login from '../../utils/loginUtils'
import * as _ from "underscore";
import AdminAppBar from "../commons/AdminAppBar";
import '../../styles/AdvocateInfoChecker.css'

/**
 * Created by lucas on 2017/7/24.
 * Check User Info from twitter and complete the other information
 */
let userGlobalInfo = {};
export default class AdvocateInfoChecker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history,
            userId: this.props.match.params.userId,
            userInfo: {},
        };
        this.SubmitUserInfo = this.SubmitUserInfo.bind(this);
    }

    SubmitUserInfo() {
        //submit info to server
        const history = this.state.history;
        console.log(userGlobalInfo);
        post('/advocator/login', userGlobalInfo).then(res => {
            if (!_.isEmpty(res) && res['data'] === true) {
                history.push('/admin/' + userGlobalInfo['id']);
            }
        });
    }
    componentDidMount() {
        login(
            this.state.userId,
            (res) => {
                //jump to homepage
                this.setState({
                    userInfo: res['data']
                });
                userGlobalInfo = res['data'];
            },
            (res) => this.state.history.push('/admin/login')
        );
    }
    render() {
        console.log(this.state.userInfo);
        const {stepperIdx} = this.state;
        console.log(stepperIdx);
        const {name, alias, avatar} = this.state.userInfo;
        const infoChange = (name, value) => {
            userGlobalInfo[name] = value;
        };
        const form = (
            <div className="twitter-form-panel">
                <h2>Initialize you account</h2>
                <Avatar
                    src={avatar}
                    size={50}
                    style={{margin: '10px'}}
                />
                <TextField
                    id="twitter_name"
                    defaultValue={name}
                    floatingLabelText="TwitterName"
                    onChange={(event) => infoChange('name', event.target.value)}
                />
                <TextField
                    id="twitter_alias"
                    defaultValue={alias}
                    floatingLabelText="Twitter HomePage"
                    onChange={(event) => infoChange('alias', event.target.value)}
                />
                <TextField
                    id="home_page"
                    floatingLabelText="Your Own HomePage"
                    onChange={(event) => infoChange('homePage', event.target.value)}
                />
                <TextField
                    id="facebook_page"
                    floatingLabelText="Facebook PublicPage"
                    onChange={(event) => infoChange('facebookAccount', event.target.value)}
                />
                <TextField
                    id="github_page"
                    floatingLabelText="Github HomePage"
                    onChange={(event) => infoChange('githubAccount', event.target.value)}
                />
                <ChipInput
                    floatingLabelText="Tech Aspects"
                    onChange={(value) => infoChange('tags', value)}
                />
            </div>
        );
        const informationForm = (
            <div style={{marginLeft: '10%', marginRight: '10%', width: '100%'}}>
                <Paper zDepth={1}>
                    {form}
                    <RaisedButton
                        label='Finish'
                        primary={true}
                        fullWidth={true}
                        onTouchTap={this.SubmitUserInfo}
                        style={{marginTop: '30px'}}
                    />
                </Paper>
            </div>
        );
        let content = {};
        if (_.isEmpty(this.state.userInfo)) {
            //query user info
            content =  <CircularProgress size={65} thickness={5} style={{marginTop: '10%'}}/>;
        } else {
            //user exist
            // add info not complete if ()
            content = informationForm
        }
        return (
            <div className="info-checker-panel">
                <AdminAppBar history={this.props.history} dark={true}/>
                <div className="info-checker-content">
                    {content}
                </div>
            </div>
        );
    }
}