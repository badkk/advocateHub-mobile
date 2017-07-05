import React, {Component} from 'react'
import Menu from './commons/Menu'
import {Paper, ListItem, Avatar, FontIcon} from 'material-ui'
import ContentTap from './commons/ContentTap'
import {
    blue300,
    grey100,
} from 'material-ui/styles/colors';
import '../styles/Meeting.css'

/**
 * Created by t-zikfan on 2017/7/3.
 * Meeting information page
 */
class MeetingInfoPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const meetingInfoMaxHeight = window.screen.height * 0.1;
        return (
            <div>
                <ListItem
                    primaryText="Microsoft Developer Meeting"
                    secondaryText="2017-07-01 09:00pm @ Seattle"
                    leftAvatar={<Avatar color={blue300} backgroundColor={grey100}>MS</Avatar>}
                    style={{width:"100%", maxHeight: meetingInfoMaxHeight}}
                />
                <hr/>
                <ListItem
                    primaryText="Speaker : John Papa"
                    secondaryText="Subject : Deploying react to Azure"
                    leftAvatar={<Avatar src="johnpapa.png"/>}
                    style={{width:"100%", maxHeight: meetingInfoMaxHeight}}
                    innerDivStyle={{paddingTop: '8px'}}
                    className="meeting-speaker-panel"/>
            </div>
        );

    }
}
class MeetingContent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const maxHeight = window.screen.height * 0.7;
        const tabNames = ['Introduction', 'Notes', 'About'];
        const contents = [<div>Content1</div>, <div>Content2</div>, <div>Content3</div>]
        return (
            <div style={{maxHeight: maxHeight}}>
                <ContentTap tabNames={tabNames} contents={contents}/>
            </div>
        );
    }
}
export default class Meeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history,
        }
    }
    render() {
        return (
            <div>
                <MeetingInfoPage />
                <MeetingContent />
                <Menu history={ this.state.history } state={0}/>
            </div>
        );
    }
}