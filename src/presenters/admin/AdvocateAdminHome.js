import React, {Component} from 'react'
import AdminAppBar from "../commons/AdminAppBar"
import { RaisedButton, Subheader } from 'material-ui'
import AdvocateMeetingInfo from './AdvocateMeetingInfo'
import get from '../../restful/Get'
import post from '../../restful/Post'
import { MeetingListItem } from '../AdvocateInfoPresenter.js'
import Strings from '../../res/values/string'
import * as _ from "underscore"
import '../../styles/AdvocateAdminHome.css'
import {utcToLocal, combineDates} from '../../utils/time'
/**
 * Created by t-zikunfan
 * Date: 11:03 2017/7/25
 */
export default class AdvocateAdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            advocatorId: this.props.match.params.userId,
            meethingInfo: { "advocatorId" : this.props.match.params.userId },
            meetings: {},
            qrcodeLink: ''
        };
        this.createMeeting = this.createMeeting.bind(this);
        this.cancelMeeting = this.cancelMeeting.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.postMeeting = this.postMeeting.bind(this);
        this.getMeetings = this.getMeetings.bind(this);
    }

    componentDidMount(){
        this.getMeetings();
    }
    createMeeting() {
        this.setState({
            showForm: true,
            qrcodeLink: ''
        });
    }

    cancelMeeting() {
        this.setState({
            showForm: false,
            qrcodeLink: ''
        });
    }

    handleChange(key, value) {
        let old = this.state.meethingInfo;
        old[key] = value;
        this.setState({meethingInfo: old})
    }

    postMeeting(){
        const that = this;
        const meetingInfo = this.state.meethingInfo;
        meetingInfo['date'] = combineDates(meetingInfo['date1'], meetingInfo['date2']);
        console.log(meetingInfo['date']);
        delete meetingInfo['date1'];
        delete meetingInfo['date2'];
        post('/meeting/create', meetingInfo).then(res => {
            if (!_.isEmpty(res) && !_.isEmpty(res['data'])) {
                this.setState({
                    showForm: false,
                    qrcodeLink: Strings.serverAddr + '/qrcode/' + res['data']
                });
                that.getMeetings();
            }
        });
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
        const buttonLabel = this.state.showForm ? "Cancel" : "Create meeting";
        const buttonEvent = this.state.showForm ? this.cancelMeeting : this.createMeeting;
        const componentInnerStyle = {width: '100%'};
        if(this.state.showForm){
            component =
                <div style={componentInnerStyle}>
                    <AdvocateMeetingInfo handleChange={this.handleChange}/>
                    <div style={{margintTop: '5%', width: '100%'}}>
                        <RaisedButton label={buttonLabel} onTouchTap={buttonEvent} style={{width:'50%'}} />
                        <RaisedButton label="Create" onTouchTap={this.postMeeting} primary={true} style={{width:'50%'}}/>
                    </div>
                </div>;
        } else {
            component =
                <div style={componentInnerStyle}>
                    <RaisedButton label={buttonLabel} onTouchTap={buttonEvent} primary={true} fullWidth={true}/>
                    <Subheader>Meetings</Subheader>
                    {
                        _.map(this.state.meetings, (meeting) =>
                        <MeetingListItem
                            id={meeting['_id']}
                            meetingTitle={meeting['name']}
                            meetingTags={utcToLocal(meeting['date'])}
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
        return (
            <div className="admin-home-panel">
                <AdminAppBar history={this.props.history} dark={false}/>
                {qrcodeImg}
                {component}
            </div>
        );
    }
}