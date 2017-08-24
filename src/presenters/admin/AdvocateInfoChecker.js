import React, {Component} from 'react'
import {CircularProgress, RaisedButton, Paper, Avatar, TextField, FontIcon} from 'material-ui'
import post from '../../restful/Post'
import ChipInput from 'material-ui-chip-input'
import login from '../../utils/loginUtils'
import * as _ from "underscore";
import AdminAppBar from "../commons/AdminAppBar";
import {oAuthLinkedinInit, linkedinAccess} from "../../utils/socialMedUtils"
import {adminClasses} from "../../styles/AdminStyles"

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
            bindingLinkedin: false
        };
        this.submitUserInfo = this.submitUserInfo.bind(this);
        this.getLinkedinProfile = this.getLinkedinProfile.bind(this);
    }

    submitUserInfo() {
        //submit info to server
        const history = this.state.history;
        console.log(userGlobalInfo);
        post('/advocator/login', userGlobalInfo).then(res => {
            if (!_.isEmpty(res) && res['data'] === true) {
                history.push('/admin/' + userGlobalInfo['id']);
            }
        });
    }
    getLinkedinProfile() {
        const success = (res) => {
            let newUserInfo = this.state.userInfo;
            newUserInfo.linkedin = res;
            this.setState({
                userInfo: newUserInfo,
                bindingLinkedin: true
            });
        };
        const failed = (res) => {
            console.log("login failed", res);
        };
        linkedinAccess(success, failed);
    }
    componentDidMount() {
        login(
            this.state.userId,
            (res) => {
                //jump to homepage
                this.setState({
                    userInfo: res['data'],
                    bindingLinkedin: 'linkedin' in res['data']
                });
                userGlobalInfo = res['data'];
            },
            (res) => this.state.history.push('/admin/login')
        );
        oAuthLinkedinInit();
    }

    render() {
        console.log(this.state.userInfo);
        const {name, twitterAccount, avatar, facebookAccount, githubAccount, homePage, tags} = this.state.userInfo;
        const infoChange = (name, value) => {
            userGlobalInfo[name] = value;
        };
        const linkedinBtnIcon = this.state.bindingLinkedin ? <FontIcon className="fa fa-check-square-o"/> : <FontIcon  className="fa fa-linkedin-square"/>;
        const linkedinBtnText = this.state.bindingLinkedin ? "Binding Successful!" : "Linked with Linkedin";
        const linkedinBtnColor = this.state.bindingLinkedin ? '#1e9f75' : '#0077b5';

        const form = (
            <div className={adminClasses.infoCheckForm}>
                <h2>Initialize you account</h2>
                <Avatar
                    src={avatar}
                    size={50}
                    style={{margin: '10px'}}
                />
                <TextField
                    key="twitter_name"
                    defaultValue={name}
                    floatingLabelText="TwitterName"
                    onChange={(event) => infoChange('name', event.target.value)}
                />
                <TextField
                    key="twitter_alias"
                    defaultValue={twitterAccount}
                    floatingLabelText="Twitter Alias"
                    onChange={(event) => infoChange('twitterAccount', event.target.value)}
                />
                <TextField
                    key="home_page"
                    defaultValue={homePage}
                    floatingLabelText="Your Own HomePage"
                    onChange={(event) => infoChange('homePage', event.target.value)}
                />
                <TextField
                    key="facebook_page"
                    defaultValue={facebookAccount}
                    floatingLabelText="Facebook PublicPage"
                    onChange={(event) => infoChange('facebookAccount', event.target.value)}
                />
                <TextField
                    key="github_page"
                    defaultValue={githubAccount}
                    floatingLabelText="Github Alias"
                    onChange={(event) => infoChange('githubAccount', event.target.value)}
                />
                <ChipInput
                    key="tech_aspects"
                    floatingLabelText="Tech Aspects"
                    defaultValue={tags}
                    onChange={(value) => infoChange('tags', value)}
                />
                <RaisedButton
                    key="linkedin_button"
                    label={linkedinBtnText}
                    icon={linkedinBtnIcon}
                    primary={true}
                    buttonStyle={{
                        backgroundColor: linkedinBtnColor,
                        width: '250px'
                    }}
                    style={{
                        marginTop: '10px'
                    }}
                    onTouchTap={this.getLinkedinProfile}
                />
            </div>
        );
        const informationForm = (
            <div className={adminClasses.infoCheckContent}>
                {form}
                <RaisedButton
                    label='Save'
                    primary={true}
                    fullWidth={true}
                    onTouchTap={this.submitUserInfo}
                    style={{marginTop: '30px'}}
                />
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
            <div className={adminClasses.infoCheckPanel}>
                <AdminAppBar history={this.props.history}/>
                {content}
            </div>
        );
    }
}