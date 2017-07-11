import React, {Component} from 'react'
import Menu from './commons/Menu'
import {ListItem, Avatar,
    FloatingActionButton, AppBar, IconButton, FontIcon, Divider, List} from 'material-ui'
import { BottomSheet } from 'material-ui-bottom-sheet';
import {
    white,
    grey500
} from 'material-ui/styles/colors';
import '../styles/Meeting.css'
import {
    SocialShare,
    NavigationChevronRight,
    HardwareKeyboardArrowLeft,
    NavigationMoreVert} from 'material-ui/svg-icons';
import ContentTap from './commons/ContentTap'
import IntroduceContent from './IntroduceContent'
import AboutContent from './AboutContent'
import NotesContent from './NotesContent'
/**
 * Created by t-zikfan on 2017/7/3.
 * Meeting information page
 */
class MeetingInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: props.history
        }
    }
    handleAzureTouchTap = () => {
      this.state.history.push('/azure')
    };
    handleAdvocateTouchTap = () => {
        this.state.history.push('/advocate')
    };
    render() {
        const meetingInfoMaxHeight = window.screen.height * 0.1;
        const infoButton = <NavigationChevronRight/>;
        return (
            <div>
                <ListItem
                    primaryText="Microsoft Azure"
                    secondaryText="Learn more about Microsoft Azure"
                    leftAvatar={<Avatar src="AzureLogo.jpg" style={{borderRadius: 0}}/>}
                    rightIcon={infoButton}
                    style={{width:"100%", maxHeight: meetingInfoMaxHeight}}
                    onTouchTap={this.handleAzureTouchTap}
                />
                <hr style={{ width:'90%'}}/>
                <ListItem
                    primaryText="Speaker : John Papa"
                    secondaryText="Subject : Deploying Angular to Azure"
                    leftAvatar={<Avatar src="johnpapa.png"/>}
                    style={{width:"100%", maxHeight: meetingInfoMaxHeight}}
                    innerDivStyle={{paddingTop: '8px'}}
                    rightIcon={infoButton}
                    className="meeting-speaker-panel"
                    onTouchTap={this.handleAdvocateTouchTap}/>
            </div>
        );

    }
}
//future will add state component
class MeetingContent extends Component {
    render() {
        const tabNames = ['Introduce', 'Notes', 'About'];
        const contents = [<IntroduceContent/>, <NotesContent/>, <AboutContent/>];
        return (
            <div>
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
            isOpen: false
        };
        this.handleShareButtonClick = this.handleShareButtonClick.bind(this);
    }
    handleShareButtonClick(e) {
        this.setState({
            isOpen: true
        })
    };
    render() {
        //icons
        const backIcon = <IconButton><HardwareKeyboardArrowLeft color={white}/></IconButton>;
        const shareIcon =
            <IconButton
                onTouchTap={this.handleShareButtonClick}
            >
                <NavigationMoreVert color={white}/>
            </IconButton>;
        const facebookIcon = <FontIcon className="fa fa-facebook-official"/>;
        const twitterIcon = <FontIcon className="fa fa-twitter"/>;
        const googlePlusIcon = <FontIcon className="fa fa-google-plus"/>;
        /* Bottom shared sheet */
        const sharedBottomSheet = <div>
            <BottomSheet
                action={
                    <FloatingActionButton>
                        <SocialShare/>
                    </FloatingActionButton>
                }
                onRequestClose={() => this.setState({isOpen: false})}
                open={this.state.isOpen}
            >
                <h4 style={{color: grey500, marginLeft: '25px'}}>Share this meeting</h4>
                <Divider inset/>
                <List>
                    <ListItem primaryText="Facebook" leftIcon={facebookIcon}/>
                    <ListItem primaryText="Twitter" leftIcon={twitterIcon}/>
                    <ListItem primaryText="Google+" leftIcon={googlePlusIcon}/>
                </List>
            </BottomSheet>
        </div>;
        return (
            <div>

                <AppBar
                    title="Meeting Detail"
                    iconElementLeft={backIcon}
                    iconElementRight={shareIcon}
                    className="meeting-app-bar"
                />
                <MeetingInfoPage history={this.state.history}/>
                <MeetingContent />
                <Menu history={ this.state.history } state={0}/>
                {sharedBottomSheet}
            </div>
        );
    }
}