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

/**
 * Created by lucas on 2017/7/4.
 * Advocate Info Presenter
 */
const appBarHeight = 70;
let iFramePanelHeight = window.screen.height - homeBarHeight - appBarHeight - tabMenuHeight;
class InfoBar extends Component {
    render() {
        const {
            handleBtmSheetOpen,
            twitterName,
            avatar,
            tags
        } = this.props;
        const followedIconButton = (<RaisedButton primary={true} className="follow-button" label="Follow" onTouchTap={handleBtmSheetOpen}/>);
        return (
            <Paper style={{height: appBarHeight}} className="advocate-info-app-bar">
                <ListItem
                    primaryText={twitterName}
                    secondaryText={tags.toString()}
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
        const displayGithubCheck = followedGh ? "block" : "none";
        const followGhIcon =
            <div className="github-follow-button-div" onTouchTap={handleGhFollow}>
                <a className="github-button"
                   href={githubName}
                   onClick={handleGhFollow}
                   data-size="large"
                   data-show-count="true"
                   aria-label="Follow on GitHub">Follow</a>
                <ActionCheckCircle color={green500} style={{display: displayGithubCheck}}/>
            </div>;
        return (
            <BottomSheet
                action={
                    <FloatingActionButton>
                        <SocialPersonAdd/>
                    </FloatingActionButton>
                }
                onRequestClose={handleBtmSheetClose}
                open={isOpen}>
                <h4 style={{color: grey500, marginLeft: '25px'}}>Follow me on these channel</h4>
                <Divider inset/>
                <List>
                    <ListItem primaryText="Facebook"
                              secondaryText="Followers: 29,1552"
                              leftIcon={FacebookIcon}
                              rightIconButton={
                                  <IconButton
                                      onTouchTap={handleFbFollow}
                                      className="advocate-follow-button"
                                  >{followFbIcon}</IconButton>}/>
                    <ListItem primaryText="Twitter"
                              secondaryText="Followers: 59,8578"
                              leftIcon={TwitterIcon}
                              rightIconButton={
                                  <IconButton
                                      onTouchTap={handleTtFollow}
                                      className="advocate-follow-button"
                                  >{followTtIcon}</IconButton>}/>
                    <ListItem primaryText="Github"
                              secondaryText="Followers: 7,258"
                              leftIcon={GithubIcon}
                              rightIconButton={
                                  <IconButton
                                      className="advocate-follow-button"
                                      onTouchTap={handleGhFollow}
                                  >{followGhIcon}</IconButton>}/>
                </List>
            </BottomSheet>
        );
    }
}
function MeetingListItem({meetingTitle, meetingTags, isComplete, touchEvent=() => {}}) {
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
        const {homePageUrl, history} = this.props;
        const tabs = [
            <Tab label='HomePage' value={0} />,
            <Tab label='Meetings' value={1} />
        ];
        const meetingsList = [
            <MeetingListItem meetingTitle="Angular on Azure" meetingTags="Angular, Azure" isComplete={true} touchEvent={() => {history.push('/meeting/johnpapa_123')}}/>,
            <MeetingListItem meetingTitle="Cosmo DB on Azure" meetingTags="Cosmo, Azure" isComplete={false}/>,
            <MeetingListItem meetingTitle="Thinking in .NET" meetingTags=".NET, C#" isComplete={true}/>
        ];
        const contents = [
            <iframe src={homePageUrl}
                    title={homePageUrl}
                    height={iFramePanelHeight}
                    width='100%'
                    frameBorder="0"
            />,
            <div>
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
                    stickyHeight={homeBarHeight}
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
    componentWillMount() {
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
            <div>
                <HomeBar history={this.props.history}/>
                <InfoBar
                    avatar={this.props.avatar}
                    tags={this.props.tags}
                    twitterName={this.props.twitterName}
                    handleBtmSheetOpen={this.props.handleBtmSheetOpen}/>
                <PersonalPage
                    homePageUrl={this.props.homePage}
                    history={this.props.history}
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
