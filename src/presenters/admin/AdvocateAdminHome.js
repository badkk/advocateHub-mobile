import React, {Component} from 'react'
import AdminAppBar from "../commons/AdminAppBar"
import { RaisedButton, Subheader, Snackbar } from 'material-ui'
import AdvocateMeetingInfo from './AdvocateMeetingInfo'
import get from '../../restful/Get'
import post from '../../restful/Post'
import { MeetingListItem } from '../AdvocateInfoPresenter.js'
import Strings from '../../res/values/string'
import * as _ from "underscore"
import '../../styles/AdvocateAdminHome.css'
import {isDateCompleted, utcToLocal, combineDates} from '../../utils/time'
import login from '../../utils/loginUtils'
import {tweet} from "../../utils/socialMedUtils"
import {getFileName} from "../../utils/strings"
/**
 * Created by t-zikunfan
 * Date: 11:03 2017/7/25
 */
export default class AdvocateAdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history,
            showForm: false,
            advocatorId: this.props.match.params.userId,
            meethingInfo: { "advocatorId" : this.props.match.params.userId },
            meetings: {},
            qrcodeLink: '',
            advocateInfo: {},
            open: false,
            meetingFormButtonTxt: 'Create&Tweet'
        };
        this.createMeeting = this.createMeeting.bind(this);
        this.updateMeeting = this.updateMeeting.bind(this);
        this.cancelMeeting = this.cancelMeeting.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.postMeeting = this.postMeeting.bind(this);
        this.getMeetings = this.getMeetings.bind(this);
        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
        this.handleTwitterTweet = this.handleTwitterTweet.bind(this);

    }

    componentDidMount(){
        login(
            this.state.advocatorId,
            (res) => {
                this.setState({
                    advocateInfo: res['data']
                });
                this.getMeetings();
            },
            (res) => this.state.history.push('/admin/login')
        );
    }
    createMeeting() {
        this.setState({
            showForm: true,
            qrcodeLink: '',
            meetingFormButtonTxt: 'Create&Tweet',
            meethingInfo: { "advocatorId" : this.props.match.params.userId },
        });
    }
    updateMeeting(meeting) {
        console.log(meeting);
        this.setState({
            showForm: true,
            qrcodeLink: '',
            meetingFormButtonTxt: 'Update',
            meethingInfo: meeting
        });
    }
    cancelMeeting() {
        this.setState({
            showForm: false,
            qrcodeLink: '',
        });
    }

    handleChange(key, value) {
        let old = this.state.meethingInfo;
        old[key] = value;
        this.setState({meethingInfo: old});
    }

    handleSnackbarClose() {
        this.setState({
            open: false
        });
    }
    handleTwitterTweet(id, link) {
        let meetingInfo = this.state.meethingInfo;
        const successCallback = (res) => {
            console.log(res);
            meetingInfo['_id'] = id;
            meetingInfo['tweetId'] = res.id_str;
            post('/meeting/create', meetingInfo).then(res => {
                console.log(res);
            });
        };
        const failedCallback = (res) => {
            console.log("failed", res);
        };
        tweet(meetingInfo.name, link, successCallback, failedCallback);
    }
    postMeeting(){
        const that = this;
        const meetingInfo = this.state.meethingInfo;
        if (('date' in meetingInfo || ('date1' in meetingInfo && 'date2' in meetingInfo)) && 'name' in meetingInfo) {
            if (!('date1' in meetingInfo)) {
               meetingInfo['date1'] = new Date(meetingInfo['date']);
            }
            if (!('date2' in meetingInfo)) {
                meetingInfo['date2'] = new Date(meetingInfo['date']);
            }
            meetingInfo['date'] = combineDates(meetingInfo['date1'], meetingInfo['date2']);
            delete meetingInfo['date1'];
            delete meetingInfo['date2'];
            post('/meeting/create', meetingInfo).then(res => {
                if (!_.isEmpty(res)) {
                    console.log(res['data']);
                    let qrcodeLink = '';
                    let twitterLink = '';
                    if ('qrcode' in res['data']) {
                        qrcodeLink = Strings.serverAddr + '/qrcode/' + res.data.qrcode;
                        twitterLink = res.data.link;
                    }
                    this.setState({
                        showForm: false,
                        qrcodeLink: qrcodeLink
                    });
                    const meetingId = getFileName(res.data.qrcode);
                    that.handleTwitterTweet(meetingId, twitterLink);
                    that.getMeetings();
                }
            });
        } else {
            this.setState({
                open: true
            });
        }
    }

    getMeetings(){
        get('/advocator/' + this.state.advocatorId).then(res => {
            let data = res['data'];
            if ('meetings' in data) {
                console.log("s");
                this.setState({
                    meetings: data["meetings"]
                });
            }
        });
    }
    render() {
        let component;
        const componentInnerStyle = {width: '100%'};
        if(this.state.showForm){
            component =
                <div style={componentInnerStyle}>
                    <AdvocateMeetingInfo
                        handleChange={this.handleChange}
                        meeting={this.state.meethingInfo}
                        meetingFormButtonTxt={this.state.meetingFormButtonTxt}
                    />
                    <div style={{width: '90%', paddingLeft: '5%'}}>
                        <RaisedButton label="Cancel" onTouchTap={this.cancelMeeting} style={{width:'50%'}} />
                        <RaisedButton label={this.state.meetingFormButtonTxt} onTouchTap={this.postMeeting} primary={true} style={{width:'50%'}}/>
                    </div>
                </div>;
        } else {
            component =
                <div style={componentInnerStyle}>
                    <RaisedButton label="Create meeting" onTouchTap={ this.createMeeting} primary={true} fullWidth={true}/>
                    <Subheader>Your Meetings</Subheader>
                    {
                        _.map(this.state.meetings, (meeting, idx) =>
                        <MeetingListItem
                            key={idx}
                            id={meeting['_id']}
                            meetingTitle={meeting['name']}
                            meetingTags={utcToLocal(meeting['date'])}
                            isComplete={isDateCompleted(meeting['date'])}
                            touchEvent={() => this.updateMeeting(meeting)}
                        />)
                    }
                </div>
        }
        const qrcodeImg = _.isEmpty(this.state.qrcodeLink) ?
            <div/> :
            <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection:'column'}}>
                <h3>Your Meeting({this.state.meethingInfo['name']}) QRCode</h3>
                <img src={this.state.qrcodeLink}/>
            </div>;
        const avatarUrl = 'avatar' in this.state.advocateInfo ? this.state.advocateInfo['avatar'] : null;
        return (
            <div className="admin-home-panel">
                <AdminAppBar
                    history={this.props.history}
                    dark={true}
                    avatarUrl={avatarUrl}
                    avatarTapEvent={() => {this.state.history.push(this.state.advocatorId + '/infocheck')}}
                />
                {qrcodeImg}
                {component}
                <Snackbar
                    open={this.state.open}
                    message="Please complete Title, Date and Time"
                    autoHideDuration={3000}
                    onRequestClose={this.handleSnackbarClose}
                />
            </div>
        );
    }
}