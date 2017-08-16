import React, {Component} from 'react'
import {
    ListItem,
    List,
    Tab,
} from 'material-ui'
import SwipeableViews from 'react-swipeable-views';
import {  ActionCached, ActionDone } from 'material-ui/svg-icons'
import { green500, yellow500} from 'material-ui/styles/colors'
import HomeBar, {homeBarHeight} from './commons/HomeBar'
import AHTab, {tabMenuHeight} from './commons/AHTab'
import "../styles/AdvocateInfo.css"
import * as _ from 'underscore'
import {isDateCompleted} from '../utils/time'
import InfoPanel from './advocatedetail/InfoPanel'
import BioPanel from './advocatedetail/BioPanel'
/**
 * Created by lucas on 2017/7/4.
 * Advocate Info Presenter
 */
const infoBarHeight = 70;
let iFramePanelHeight = window.screen.height - homeBarHeight - infoBarHeight - tabMenuHeight;
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
        const {homePage, history, meetings,
            jobtitle, linkedinAccount, location,
            positions, summary } = this.props;
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
        const homePageDiv = <BioPanel homePage={homePage}
                                      jobtitle={jobtitle}
                                      linkedinAccount={linkedinAccount}
                                      location={location}
                                      positions={positions}
                                      summary={summary} />;
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
            liked: false
        };
    }
    componentDidMount() {
        //console.log(this.props.match.params.id);
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
    handleLikedClick = () => {
        const liked = this.state.liked;
        this.setState({
            liked: !liked
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
            linkedinAccount,
            jobtitle,
            positions,
            location,
            summary
        } = this.props;
        return (
            <div className="advocate-detail-root-panel">
                <HomeBar history={history}/>
                <InfoPanel
                    avatar={avatar}
                    tags={tags}
                    name={name}
                    facebookEvent={this.socialMediaEvent(facebookHomePage)}
                    twitterEvent={this.socialMediaEvent(twitterAccount ? "http://twitter.com/" + twitterAccount : null)}
                    githubEvent={this.socialMediaEvent(githubAccount ? "http://github.com/" + githubAccount : null)}
                    handleBtmSheetOpen={this.handleBtmSheetOpen}
                    likedNum={likedNum}
                    clickLiked={this.handleLikedClick}
                    liked={this.state.liked}
                />
                <PersonalPage
                    homePage={homePage}
                    history={history}
                    meetings={meetings}
                    jobtitle={jobtitle}
                    positions={positions}
                    summary={summary}
                    location={location}
                    linkedinAccount={linkedinAccount}
                />
            </div>
        );
    }
}
