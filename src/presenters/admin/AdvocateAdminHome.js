import React, {Component} from 'react'
import AdminAppBar from "../commons/AdminAppBar";
import { RaisedButton } from 'material-ui'
import AdvocateMeetingInfo from './AdvocateMeetingInfo.js'
import post from '../../restful/Post'
import * as _ from "underscore";

/**
 * Created by t-zikunfan
 * Date: 11:03 2017/7/25
 */
export default class AdvocateAdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            meethingInfo: { "advocatorId" : this.props.match.params.userId },
        };
        this.createMeeting = this.createMeeting.bind(this);
        this.cancelMeeting = this.cancelMeeting.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.postMeeting = this.postMeeting.bind(this);
    }

    render() {
        var component;
        const buttonLabel = this.state.showForm ? "Cancel" : "Create meeting";
        const buttonEvent = this.state.showForm ? this.cancelMeeting : this.createMeeting;

        if(this.state.showForm){
            component = <div>
                <AdvocateMeetingInfo handleChange={this.handleChange}/>
                <RaisedButton label="Create" onTouchTap={this.postMeeting} primary={true} fullWidth={true} />
                <RaisedButton label={buttonLabel} onTouchTap={buttonEvent} primary={true} fullWidth={true} />
            </div>;
        } else {
            component = <RaisedButton label={buttonLabel} onTouchTap={buttonEvent} primary={true} fullWidth={true}/>;
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
                // TODO: redirection?
                console.log("success!");
            }
        });
    }
}