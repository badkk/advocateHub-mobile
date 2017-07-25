import React, {Component} from 'react'
import AdminAppBar from "../commons/AdminAppBar";
import { RaisedButton } from 'material-ui'
import AdvocateMeetingInfo from './AdvocateMeetingInfo.js'
/**
 * Created by t-zikunfan
 * Date: 11:03 2017/7/25
 */
export default class AdvocateAdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            userId: this.props.match.params.userId,
        };
        this.CreateMeeting = this.CreateMeeting.bind(this);
        this.CancelMeeting = this.CancelMeeting.bind(this);
    }
    render() {
        var component;
        const buttonLabel = this.state.showForm ? "Cancel meeting" : "Create meeting";
        const buttonEvent = this.state.showForm ? this.CancelMeeting : this.CreateMeeting;
        if(this.state.showForm){
            component = <div>
                <RaisedButton label={buttonLabel} onTouchTap={buttonEvent} primary={true} fullWidth={true} />
                <AdvocateMeetingInfo userId={this.state.userId}/>
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

    CreateMeeting() {
        this.setState({showForm: true});
    }

    CancelMeeting() {
        this.setState({showForm: false});
    }
}