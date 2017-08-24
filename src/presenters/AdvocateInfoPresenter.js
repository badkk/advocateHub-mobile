import React, {Component} from 'react'
import {
    ListItem,
    List,
    Tab,
    CircularProgress
} from 'material-ui'
import SwipeableViews from 'react-swipeable-views';
import {  ActionCached, ActionDone } from 'material-ui/svg-icons'
import { green500, yellow500 } from 'material-ui/styles/colors'
import AppBar from './commons/AppBar'
import ContentTab from './commons/ContentTab'
import "../styles/AdvocateInfo.css"
import * as _ from 'underscore'
import {isDateCompleted} from '../utils/time'
import InfoPanel from './advocatedetail/InfoPanel'
import BioPanel from './advocatedetail/BioPanel'
import {isUrl} from "../utils/strings"

/**
 * Created by lucas on 2017/7/4.
 * Advocate Info Presenter
 */
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
            <Tab label='Home' value={1} key={1}/>,
            <Tab label='Talks' value={2} key={2}/>

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
        const linkedinInfoDiv = <BioPanel key="bio-panel"
                                          homePage={homePage}
                                          jobtitle={jobtitle}
                                          linkedinAccount={linkedinAccount}
                                          location={location}
                                          positions={positions}
                                          summary={summary} />;
        const homePageDiv = isUrl(homePage) ?
            <div key="advocate_homepage" className="homePage-did-set">
                <iframe src={homePage}
                        title={homePage}
                        width='100%'
                        frameBorder="0"
                        onLoad={this.progressLoaded}
                />
                <CircularProgress style={{padding:'30% 50% 30% 50%', top: 0, display: this.state.showProgress ? "flex" : "none"}}/>
            </div>
            :
            <div
                key="advocate_homepage_not_set"
                className="homePage-did-not-set"
            >
                User Did Not Set HomePage
            </div>;

        const contents = [
            linkedinInfoDiv,
            homePageDiv,
            <div className="meetings-panel" key="advocate_meeting_details">
                <List>
                    {meetingsList}
                </List>
            </div>
        ];
        return (
            <div>
                <ContentTab
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
            <div>
                <AppBar history={history}/>
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
