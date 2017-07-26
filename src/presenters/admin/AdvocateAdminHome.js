import React, {Component} from 'react'
import AdminAppBar from "../commons/AdminAppBar"
import { RaisedButton, Subheader } from 'material-ui'
import AdvocateMeetingInfo from './AdvocateMeetingInfo'
import get from '../../restful/Get'
import post from '../../restful/Post'
import { MeetingListItem } from '../AdvocateInfoPresenter.js'
import * as _ from "underscore"

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

    render() {
        var component;
        const buttonLabel = this.state.showForm ? "Cancel" : "Create meeting";
        const buttonEvent = this.state.showForm ? this.cancelMeeting : this.createMeeting;
        
        if(this.state.showForm){
            component = <div>
                <AdvocateMeetingInfo handleChange={this.handleChange}/>
                <div style={{margintTop: '5%', width: '100%'}}>
                    <RaisedButton label={buttonLabel} onTouchTap={buttonEvent} style={{width:'50%'}} />
                    <RaisedButton label="Create" onTouchTap={this.postMeeting} primary={true} style={{width:'50%'}}/>
                </div>
            </div>;
        } else {
            component = <div>
                <RaisedButton label={buttonLabel} onTouchTap={buttonEvent} primary={true} fullWidth={true}/>;
                <Subheader>Meetings</Subheader>
                {
                    _.map(this.state.meetings, (meeting) =>
                    <MeetingListItem
                        id={meeting['_id']}
                        meetingTitle={meeting['name']}
                        meetingTags={meeting['description']}
                    />)
                }
            </div>
        }
        return (
            <div>
                <AdminAppBar history={this.props.history} dark={false}/>
                {component}
            </div>
        );
    }

    createMeeting() {
        this.setState({showForm: true});
    }

    cancelMeeting() {
        this.setState({showForm: false});
    }

    handleChange(key, value) {
        let old = this.state.meethingInfo;
        old[key] = value;
        this.setState({meethingInfo: old})
    }

    postMeeting(){
        post('/meeting/create', this.state.meethingInfo).then(res => {
            if (!_.isEmpty(res) && res['data'] === true) {
                this.setState({showForm: false});
            }
        });
    }

    getMeetings(){
        get('/advocator/' + this.state.advocatorId).then(res => {
            let data = res['data']
            if ('meetings' in data) {
                console.log("s");
                this.setState({
                    meetings: data["meetings"]
                });
            }
        });
    }
}