import React, {Component} from 'react'
import {
    Paper,
    IconButton,
    FontIcon,
    CircularProgress,
    FlatButton,
    Avatar,
    ListItem,
    FloatingActionButton,
    RaisedButton,
    List,
    Divider,
    Tab,
} from 'material-ui'
import { BottomSheet } from 'material-ui-bottom-sheet';
import SwipeableViews from 'react-swipeable-views';
import { SocialPersonAdd, ActionCheckCircle, ActionCached, ActionDone } from 'material-ui/svg-icons'
import {grey500, green500, white, yellow500} from 'material-ui/styles/colors'
import HomeBar, {homeBarHeight} from './commons/HomeBar'
import AHTab, {tabMenuHeight} from './commons/AHTab'
import "../styles/AdvocateInfo.css"
import {isUrl} from "../utils/strings"
import * as _ from 'underscore'
import {isDateCompleted} from '../utils/time'

/**
 * Created by lucas on 2017/7/4.
 * Advocate Info Presenter
 */
const infoBarHeight = 70;
let iFramePanelHeight = window.screen.height - homeBarHeight - infoBarHeight - tabMenuHeight;
class InfoBar extends Component {
    render() {
        const {
            handleBtmSheetOpen,
            name,
            avatar,
            tags
        } = this.props;
        const followedIconButton = (<RaisedButton primary={true} className="follow-button" label="Follow" onTouchTap={handleBtmSheetOpen}/>);
        return (
            <Paper zDepth={0} style={{height: infoBarHeight, top: homeBarHeight}} className="advocate-info-app-bar">
                <ListItem
                    primaryText={name}
                    secondaryText={tags}
                    leftAvatar={<Avatar src={avatar} />}
                    rightIconButton={followedIconButton}
                    style={{width:"100%"}}
                />
            </Paper>
        );
    }
}
class SocialMediaBtmSheet extends Component {
    render() {
        const {
            isOpen,
            followedTt,
            followedGh,
            twitterName,
            handleFbFollow,
            handleGhFollow,
            handleTtFollow,
            handleBtmSheetClose,
            facebookHomePage,
            githubName
        } = this.props;
        /* Bottom shared sheet */
        //icons
        const GithubIcon = <FontIcon className="fa fa-github"/>;
        const TwitterIcon = <FontIcon className="fa fa-twitter"/>;
        const FacebookIcon = <FontIcon className="fa fa-facebook-square"/>;
        //facebookHref
        const facebookHref = "https://www.facebook.com/plugins/follow.php?href=" + facebookHomePage +"&layout=button_count&size=large&appId=689977874520550";
        //twitterHref
        const twitterHref = "https://platform.twitter.com/widgets/follow_button.html?screen_name=" + twitterName + "&show_screen_name=false&show_count=false&size=l";
        const githubHref = "http://ghbtns.com/github-btn.html?user=" + githubName + "&count=none&type=follow";
        //followedButton
        const followFbIcon = <iframe src={facebookHref}
                                     title="Follow me"
                                     width="100%"
                                     height="30"
                                     scrolling="no"
                                     frameBorder="0"
                                     allowTransparency="true"/>;
        const displayTwitterCheck = followedTt ? "block" : "none";
        const followTtIcon = (
            <div className="twitter-follow-button-div">
                <iframe src={twitterHref}
                     title="Twitter Following Button"
                     width="80%"
                     height="30"
                     scrolling="no"
                     frameBorder="0"
                     allowTransparency="true"/>
                <ActionCheckCircle color={green500} style={{display: displayTwitterCheck}}/>
            </div>
        );
        const followGhIcon =
            <div className="github-follow-button-div">
                <iframe src={githubHref}
                        allowTransparency="true"
                        frameBorder="0"
                        scrolling="no"
                        width="100%"
                        height="30"/>
            </div>;
        /*const facebookListItem = _.isEmpty(facebookHomePage) ?*/
        const facebookListItem = <ListItem primaryText="Facebook"
                                           leftIcon={FacebookIcon}
                                           rightIconButton={
                                               <IconButton
                                                   onTouchTap={handleFbFollow}
                                                   className="advocate-follow-button"
                                               >{followFbIcon}</IconButton>}/>;
        const twitterListItem = <ListItem primaryText="Twitter"
                                          leftIcon={TwitterIcon}
                                          rightIconButton={
                                              <IconButton
                                                  onTouchTap={handleTtFollow}
                                                  className="advocate-follow-button"
                                              >{followTtIcon}</IconButton>}/>;
        const githubListItem = <ListItem primaryText="Github"
                                         leftIcon={GithubIcon}
                                         rightIconButton={
                                             <IconButton
                                                 className="advocate-follow-button"
                                                 onTouchTap={handleGhFollow}
                                             >{followGhIcon}</IconButton>}/>;
        let listContent = [];
        if (!_.isEmpty(facebookHomePage)) listContent.push(facebookListItem);
        if (!_.isEmpty(twitterName)) listContent.push(twitterListItem);
        if (!_.isEmpty(githubName)) listContent.push(githubListItem);
        return (
            <BottomSheet
                onRequestClose={handleBtmSheetClose}
                open={isOpen}
            >
                <h4 style={{color: grey500, marginLeft: '25px'}}>Follow me on these channel</h4>
                <Divider/>
                <List>
                    {listContent}
                </List>
            </BottomSheet>
        );
    }
}
export function MeetingListItem({meetingTitle, meetingTags, isComplete, touchEvent=() => {}}) {
    const leftAvatar = isComplete ?
        <ActionDone color={green500} />:
        <ActionCached color={yellow500} />;
    const rightButton = isComplete ?
        <FlatButton label="Completed" primary={true}/> :
        <FlatButton label="Upcoming"/>;
    return (
        <ListItem
            leftIcon={leftAvatar}
            primaryText={meetingTitle}
            secondaryText={meetingTags}
            rightIconButton={rightButton}
            onTouchTap={touchEvent}
        >
        </ListItem>
    );
}
class PersonalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIdx: 0
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }
    handleTabClick(value) {
        this.setState({
            slideIdx: value
        });
    }
    render() {
        const {homePageUrl, history, meetings} = this.props;
        const tabs = [
            <Tab label='HomePage' value={0} />,
            <Tab label='Meetings' value={1} />
        ];
        const meetingsList = _.map(meetings, (meeting) =>
            <MeetingListItem
                id={meeting['_id']}
                meetingTitle={meeting['name']}
                meetingTags={meeting['description']}
                isComplete={isDateCompleted(meeting['date'])}
                touchEvent={() => {history.push('/meeting/'+meeting['_id'])}}
            />
        );
        const homePageDiv = isUrl(homePageUrl) ?
            <iframe src={homePageUrl}
                    title={homePageUrl}
                    height={iFramePanelHeight}
                    width='100%'
                    frameBorder="0"
                    className="homePage-did-set"
            />:
            <div
                className="homePage-did-not-set"
                style={{height: iFramePanelHeight}}
            >
                User Did Not Set HomePage
            </div>;
        const contents = [
            homePageDiv,
            <div className="meetings-panel">
                <List>
                    {meetingsList}
                </List>
            </div>
        ];
        return (
            <div>
                <AHTab
                    tabs={tabs}
                    tabChangeHandler={this.handleTabClick}
                    slideIdx={this.state.slideIdx}
                    stickyHeight={homeBarHeight+infoBarHeight}
                />
                <SwipeableViews
                    index={this.state.slideIdx}
                    onChangeIndex={this.handleTabClick}
                >
                    { contents }
                </SwipeableViews>
            </div>
        );
    }
}
export default class AdvocateInfoPresenter extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id);
        this.props.initial(this.props.match.params.id);
    }
    render() {
        /*const { fromHome } = this.props.match.params.id;
        console.log(fromHome);
        iFramePanelHeight = fromHome ?
            window.screen.height - homeBarHeight - appBarHeight - tabMenuHeight
            :
            window.screen.height - menuHeight - homeBarHeight - appBarHeight - tabMenuHeight;
        const menuDisplay = fromHome ? 'none' : 'flex';*/
        return (
            <div className="advocate-detail-root-panel">
                <HomeBar history={this.props.history}/>
                <InfoBar
                    avatar={this.props.avatar}
                    tags={this.props.tags}
                    name={this.props.name}
                    handleBtmSheetOpen={this.props.handleBtmSheetOpen}/>
                <PersonalPage
                    homePageUrl={this.props.homePage}
                    history={this.props.history}
                    meetings={this.props.meetings}
                />
                {/*<Menu
                    history={this.props.history}
                    state={2}
                    meetingId="johnpapa_123"
                    userId="johnpapa"
                />*/}
                <SocialMediaBtmSheet
                    isOpen={this.props.isOpen}
                    handleBtmSheetClose={this.props.handleBtmSheetClose}
                    followedFb={this.props.followedFb}
                    followedTt={this.props.followedTt}
                    followedGh={this.props.followedGh}
                    handleFbFollow={this.props.handleFbFollow}
                    handleTtFollow={this.props.handleTtFollow}
                    handleGhFollow={this.props.handleGhFollow}
                    facebookHomePage={this.props.facebookHomePage}
                    twitterName={this.props.twitterName}
                    githubName={this.props.githubName}
                />
            </div>
        );
    }
}
