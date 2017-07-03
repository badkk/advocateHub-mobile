import React, {Component} from 'react'
import Menu from './commons/Menu'
import {Paper, ListItem, Avatar, Tabs, Tab, FontIcon} from 'material-ui'
import SwipeableViews from 'react-swipeable-views';

import {
    blue300,
    grey100,
    cyan500,
    grey600
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
        this.state = {
            slideIndex: 0,
        };
    }
    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };
    render() {
        const maxHeight = window.screen.height * 0.7;
        return (
            <div style={{maxHeight: maxHeight}}>
                <Paper zDepth={2}>
                    <Tabs
                        onChange={this.handleChange}
                        value={this.state.slideIndex}
                        className='content-taps'
                        inkBarStyle={{backgroundColor: cyan500}}>
                        <Tab label="Introduction" value={0} />
                        <Tab label="Notes" value={1} />
                        <Tab label="About" value={2} />
                    </Tabs>
                </Paper>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}>
                    <div>
                        Content
                    </div>
                    <div>
                        Content
                    </div>
                    <div>
                        Content
                    </div>
                </SwipeableViews>
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
                <Menu history={ this.state.history } state={2}/>
            </div>
        );
    }
}