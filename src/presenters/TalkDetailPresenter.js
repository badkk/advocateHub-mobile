import React, {Component} from 'react'
import { ListItem, Avatar, Tab, IconButton } from 'material-ui'
import {cyan500} from 'material-ui/styles/colors';
import {SocialShare} from 'material-ui/svg-icons';
import SwipeableViews from 'react-swipeable-views';
import * as _ from 'underscore';
import SocialMediaBtmSheet from './commons/SocialMediaBtmSheet'
import SocialMediaDialog from './commons/SocialMediaDialog'
import IntroduceContent from './talkdetail/IntroduceContent'
import ResourcesContent from './talkdetail/ResourcesContent'
import RecommendContent from './talkdetail/RecommendContent'
import AppBar, {homeBarHeight} from './commons/AppBar'
import ContentTab, {tabMenuHeight} from './commons/ContentTab'
import '../styles/Meeting.css'
import {talkDetailClasses} from "../styles/TalkDetailStyle"

/**
 * Created by t-zikfan on 2017/7/3.
 * Meeting information page
 */
const meetingInfoMaxHeight = 66;
const containerHeight = window.screen.height - homeBarHeight - meetingInfoMaxHeight - tabMenuHeight;
function AdvocatorInfoPage({history, advocate, handleClick}){

    const {name, tags, avatar, id} = advocate;
    //click events
    const handleAdvocateTouchTap = (advoId) => {
        history.push('/advocate/' + advoId)
    };

    const handleSharedEvent = () => {
       handleClick();
        console.log("Sharedbutton clicked");
    };


    const shareButton = (
        <IconButton onTouchTap={handleSharedEvent}>
            <SocialShare color={cyan500}/>
        </IconButton>
    );
    return (
        <div className={talkDetailClasses.speakerPanel}>
            <ListItem
                primaryText={"Speaker : " + name}
                secondaryText={"Techs: " + (!_.isUndefined(tags) ? tags.join(', ') : 'Others')}
                leftAvatar={<Avatar src={avatar}/>}
                style={{width:"100%", minHeight: meetingInfoMaxHeight}}
                rightIconButton={shareButton}
                onTouchTap={() => {handleAdvocateTouchTap(id)}}
            />
        </div>
    );


}

class TalkContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIdx: 0,
            isRecommendClicked: false
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }
    handleTabClick(value) {
        this.setState({
            slideIdx: value
        });
    }
    render() {
        const {talk, getDocs, docs} = this.props;
        const tabs = [
            <Tab label='Introduction' value={0} key={0} />,
            <Tab label='Resources' value={1} key={0} />,
            <Tab label={(!this.state.isRecommendClicked ? 'Recommend *' : 'Recommend')} value={2} key={0} onActive={() => {this.state.isRecommendClicked = true} }/>,
        ];
        const contents = [
            <IntroduceContent key={0} talk={talk} />,
            <ResourcesContent key={1} talk={talk} />,
            <RecommendContent key={2} talk={talk} getDocs={getDocs} docs={docs} />
        ];
        return (
            <div>
                <ContentTab
                    tabs={tabs}
                    tabChangeHandler={this.handleTabClick}
                    slideIdx={this.state.slideIdx}
                    stickyHeight={homeBarHeight}
                />
                <SwipeableViews
                    index={this.state.slideIdx}
                    onChangeIndex={this.handleTabClick}
                    containerStyle={{minHeight: containerHeight}}
                >
                    { contents }
                </SwipeableViews>
            </div>
        );
    }
}
export default class TalkDetailPresenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleShareButtonToggle = this.handleShareButtonToggle.bind(this);
    }

    componentDidMount() {
       this.props.initial(this.props.match.params.id);
    }

    handleShareButtonToggle() {
        const status = this.state.isOpen;
        this.setState({
            isOpen: !status
        })
    };

    render() {
        const {talk, advocate, history, docs, getDocs} = this.props;
        /* Bottom shared sheet */
        const sharedBottomSheet = (
            <SocialMediaBtmSheet
                title="Share this talk"
                isOpen={this.state.isOpen}
                handleCancel={this.handleShareButtonToggle}
                facebookEvent={() => {}}
                twitterEvent={() => {}}
                googlePlusEvent={() => {}}
            />
        );
        /* Shared Dialog */
        const sharedPopup = (
            <SocialMediaDialog
                title="Share this talk"
                isOpen={this.state.isOpen}
                handleCancel={this.handleShareButtonToggle}
                facebookEvent={() => {}}
                twitterEvent={() => {}}
                googlePlusEvent={() => {}}
            />
        );
        return (
            <div>
                <AppBar history={history} />
                <AdvocatorInfoPage
                    history={history}
                    advocate={advocate}
                    handleClick={this.handleShareButtonToggle}
                />
                <TalkContent talk={talk} getDocs={getDocs} docs={docs} />
                {window.screen.width < 600 ? sharedBottomSheet : sharedPopup}
            </div>
        );
    }
}