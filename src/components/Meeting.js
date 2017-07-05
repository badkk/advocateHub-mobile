import React, {Component} from 'react'
import Menu from './commons/Menu'
import {ListItem, Avatar,
    FloatingActionButton, AppBar, IconButton, FontIcon, Divider, List, FlatButton} from 'material-ui'
import { BottomSheet } from 'material-ui-bottom-sheet';
import {
    blue300,
    grey100,
    white,
    grey500
} from 'material-ui/styles/colors';
import '../styles/Meeting.css'
import { DeviceAccessTime, MapsLocalPhone, MapsPlace, SocialShare,  NavigationChevronRight} from 'material-ui/svg-icons';
import ContentTap from './commons/ContentTap'
import IntroduceContent from './IntroduceContent'
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
        const infoButton = <NavigationChevronRight/>
        return (
            <div>
                <ListItem
                    primaryText="Microsoft Azure"
                    secondaryText="Using Azure deploying Angular.js"
                    leftAvatar={<Avatar src="AzureLogo.jpg" style={{borderRadius: 0}}/>}
                    rightIcon={infoButton}
                    style={{width:"100%", maxHeight: meetingInfoMaxHeight}}
                />
                <hr/>
                <ListItem
                    primaryText="Speaker : John Papa"
                    secondaryText="Subject : Deploying Angular to Azure"
                    leftAvatar={<Avatar src="johnpapa.png"/>}
                    style={{width:"100%", maxHeight: meetingInfoMaxHeight}}
                    innerDivStyle={{paddingTop: '8px'}}
                    rightIcon={infoButton}
                    className="meeting-speaker-panel"/>
            </div>
        );

    }
}
class MeetingContent extends Component {
    render() {
        const maxHeight = window.screen.height * 0.7 - 55;
        const panelHeight = maxHeight - 45;
        const tabNames = ['Introduce', 'Notes', 'About'];
        const contents = [<IntroduceContent/>, <div>Content2</div>, <div>Content3</div>];
        return (
            <div style={{maxHeight: maxHeight}}>
                <ContentTap tabNames={tabNames} contents={contents} panelHeight={panelHeight}/>
            </div>
        );
    }
}
export default class Meeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history,
            isOpen: false
        }
    }
    handleShareButtonClick = (e) => {
        this.setState({
            isOpen: true
        })
    };
    render() {
        const backIcon = <IconButton><FontIcon className="material-icons" color={white}>keyboard_arrow_left</FontIcon></IconButton>;
        const shareIcon = <IconButton onTouchTap={this.handleShareButtonClick}>
            <FontIcon className="material-icons" color={white}>more_vert</FontIcon></IconButton>;
        /* Bottom shared sheet */
        const sharedBottomSheet = <div>
            <BottomSheet
                action={
                    <FloatingActionButton>
                        <SocialShare/>
                    </FloatingActionButton>
                }
                onRequestClose={() => this.setState({isOpen: false})}
                open={this.state.isOpen}>
                <h4 style={{color: grey500, marginLeft: '25px'}}>Share this meeting</h4>
                <Divider inset/>
                <List>
                    <ListItem primaryText="Facebook" leftIcon={<MapsPlace/>}/>
                    <ListItem primaryText="Twitter" leftIcon={<MapsLocalPhone/>}/>
                    <ListItem primaryText="Google+" leftIcon={<DeviceAccessTime/>}/>
                </List>
            </BottomSheet>
        </div>;
        return (
            <div>
                <AppBar title="Meeting Detail" iconElementLeft={backIcon} iconElementRight={shareIcon}
                        className="meeting-app-bar"/>
                <MeetingInfoPage />
                <MeetingContent />
                <Menu history={ this.state.history } state={0}/>
                {sharedBottomSheet}
            </div>
        );
    }
}