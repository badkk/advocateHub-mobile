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
import SocialMediaBtmSheet from './commons/SocialMediaBtmSheet'

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
export function MeetingListItem({meetingTitle, meetingTags, isComplete, touchEvent=() => {}}) {
    const leftAvatar = isComplete ?
        <ActionDone color={green500} />:
        <ActionCached color={yellow500} />;
    return (
        <ListItem
            leftIcon={leftAvatar}
            primaryText={meetingTitle}
            secondaryText={meetingTags}
            onTouchTap={touchEvent}
        >
        </ListItem>
    );
}
class PersonalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIdx: 0,
            showProgress: true,
        };
        this.handleTabClick = this.handleTabClick.bind(this);
        this.progressLoaded = this.progressLoaded.bind(this);
    }
    handleTabClick(value) {
        this.setState({
            slideIdx: value
        });
    }
    progressLoaded() {
       this.setState({
           showProgress: false
       });
    }
    render() {
        const {homePageUrl, history, meetings} = this.props;
        const tabs = [
            <Tab label='Bio' value={0} key={0}/>,
            <Tab label='Talks' value={1} key={1}/>
        ];
        const meetingsList = _.map(meetings, (meeting, idx) =>
            <MeetingListItem
                key={idx}
                id={meeting['_id']}
                meetingTitle={meeting['name']}
                meetingTags={meeting['description']}
                isComplete={isDateCompleted(meeting['date'])}
                touchEvent={() => {history.push('/talk/'+meeting['_id'])}}
            />
        );
        const homePageDiv = isUrl(homePageUrl) ?
            <div key="advocate_homepage">
                <iframe src={homePageUrl}
                        title={homePageUrl}
                        height={iFramePanelHeight}
                        width='100%'
                        frameBorder="0"
                        className="homePage-did-set"
                        onLoad={this.progressLoaded}
                />
                <CircularProgress style={{position: 'absolute', padding:'30% 50% 30% 50%', top: 0, left: '0', display: this.state.showProgress ? "inline-block" : "none"}}/>
            </div>
            :
            <div
                key="advocate_homepage_not_set"
                className="homePage-did-not-set"
                style={{height: iFramePanelHeight}}
            >
                User Did Not Set HomePage
            </div>;
        const contents = [
            homePageDiv,
            <div className="meetings-panel" key="advocate_meeting_details">
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
    constructor(props) {
        super(props);
        this.state={
            isOpen: false,
            isLoading: true
        };
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        this.props.initial(this.props.match.params.id);
    }
    handleBtmSheetOpen = () => {
        this.setState({
            isOpen: true
        });
    };
    handleBtmSheetClose = () => {
        this.setState({
            isOpen: false
        });
    };
    socialMediaEvent = (url) => {
        if(url) {
            return () => window.location = url;
        } else {
            return null;
        }
    };
    render() {
        console.log(this.props);
        const {
            avatar,
            name,
            homePage,
            tags,
            history,
            meetings,
            facebookHomePage,
            twitterAccount,
            githubAccount,
            likedNum,
            popularity,
            linkedin,
            followersCount
        } = this.props;
        return (
            <div className="advocate-detail-root-panel">
                <HomeBar history={history}/>
                <InfoBar
                    avatar={avatar}
                    tags={tags}
                    name={name}
                    facebookEvent={() => this.socialMediaEvent(facebookHomePage)}
                    twitterEvent={() => this.socialMediaEvent("http://twitter.com/"+twitterAccount)}
                    githubEvent={() => this.socialMediaEvent("http://github.com/" + githubAccount)}
                    handleBtmSheetOpen={this.handleBtmSheetOpen}/>
                <PersonalPage
                    homePageUrl={homePage}
                    history={history}
                    meetings={meetings}
                />
                {/*<Menu
                    history={this.props.history}
                    state={2}
                    meetingId="johnpapa_123"
                    userId="johnpapa"
                />*/}
                <SocialMediaBtmSheet
                    title={"Follow " + name + " on these channels"}
                    isOpen={this.state.isOpen}
                    handleCancel={this.handleBtmSheetClose}
                    facebookEvent={this.socialMediaEvent(facebookHomePage)}
                    twitterEvent={this.socialMediaEvent("http://twitter.com/"+twitterAccount)}
                    githubEvent={this.socialMediaEvent("http://github.com/" + githubAccount)}
                />
            </div>
        );
    }
}
