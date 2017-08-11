import React, {Component} from 'react'

import { ListItem, Avatar, Divider, Tab, IconButton, Dialog, FlatButton } from 'material-ui'
import { BottomSheet } from 'material-ui-bottom-sheet';
import {
    grey500,
    cyan500
} from 'material-ui/styles/colors';
import {
    SocialShare
} from 'material-ui/svg-icons';
import SwipeableViews from 'react-swipeable-views';
import * as _ from 'underscore';
import SocialMediaBtmSheet from './commons/SocialMediaBtmSheet'
import SocialMediaDialog from './commons/SocialMediaDialog'
import IntroduceContent from './meetingdetail/IntroduceContent'
import ResourcesContent from './meetingdetail/ResourcesContent'
import RecommendContent from './meetingdetail/RecommendContent'
import HomeBar, {homeBarHeight} from './commons/HomeBar'
import AHTab, {tabMenuHeight} from './commons/AHTab'
import get from '../restful/Get'
import '../styles/Meeting.css'

/**
 * Created by t-zikfan on 2017/7/3.
 * Meeting information page
 */
const meetingInfoMaxHeight = 66;
const containerHeight = window.screen.height - homeBarHeight - meetingInfoMaxHeight - tabMenuHeight;
class AdvocatorInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: props.history
        }
    }
    handleAdvocateTouchTap = (advocator_id) => {
        this.state.history.push('/advocate/' + advocator_id)
    };
    handleSharedEvent = () => {
        this.props.handleClick();
        console.log("Sharedbutton clicked");
    };
    render() {
        const {name, tags, avatar, id} = this.props.advocator;
        const shareButton = (
            <IconButton onTouchTap={this.handleSharedEvent}>
                <SocialShare color={cyan500}/>
            </IconButton>
        );
        return (
            <div className="meeting-speaker-panel">
                <ListItem
                    primaryText={"Speaker : " + name}
                    secondaryText={"Techs: " + (!_.isUndefined(tags) ? tags.join(', ') : 'Others')}
                    leftAvatar={<Avatar src={avatar}/>}
                    style={{width:"100%", minHeight: meetingInfoMaxHeight}}
                    rightIconButton={shareButton}
                    onTouchTap={() => {this.handleAdvocateTouchTap(id)}}
                />
            </div>
        );

    }
}
//future will add state component
class MeetingContent extends Component {
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
        const tabs = [
            <Tab label='Introduction' value={0} key={0} />,
            <Tab label='Resources' value={1} key={0} />,
            <Tab label={(!this.state.isRecommendClicked ? 'Recommend *' : 'Recommend')} value={2} key={0} onActive={() => {this.state.isRecommendClicked = true} }/>,
        ];
        const contents = [
            <IntroduceContent key={0} meeting={this.props.meeting}/>,
            <ResourcesContent key={1} meeting={this.props.meeting}/>,
            <RecommendContent key={2} />
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
                    containerStyle={{minHeight: containerHeight}}
                >
                    { contents }
                </SwipeableViews>
            </div>
        );
    }
}
export default class MeetingDetailPresenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history,
            isOpen: false,
            title: '',
            advocateName: '',
            description: '',
            meeting: {
                advocator: {}
            }
        };
        this.handleShareButtonClick = this.handleShareButtonClick.bind(this);
        this.handleShareButtonCancel = this.handleShareButtonCancel.bind(this);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount() {
        get('/meeting/' + this.props.match.params.id).then(res => {
            this.setState({
                meeting: res['data']
            });
        });
    }

    handleShareButtonClick(e) {
        this.setState({
            isOpen: true
        })
    };

    handleShareButtonCancel(e) {
        this.setState({
            isOpen: false
        })
    };

    handleBackButtonClick() {
        this.state.history.push('/meetings')
    }
    render() {
        /* Bottom shared sheet */
        const sharedBottomSheet = (
            <SocialMediaBtmSheet title="Share this talk" isOpen={this.state.isOpen} handleCancel={this.handleShareButtonCancel}/>
        );
        /* Shared Dialog */
        const action = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleShareButtonCancel}
                fullWidth={true}
            />,
        ];
        const sharedPopup = (
            <SocialMediaDialog title="Share this talk" isOpen={this.state.isOpen} handleCancel={this.handleShareButtonCancel}/>
        );
        return (
            <div style={{scroll: 'hidden'}} className="meeting-detail-root-panel">
                <HomeBar history={this.props.history} />
                <AdvocatorInfoPage
                    history={this.state.history}
                    advocator={this.state.meeting.advocator}
                    handleClick={this.handleShareButtonClick}
                />
                <MeetingContent meeting={this.state.meeting} />
                {/*<Menu history={ this.state.history } state={0} meetingId="johnpapa_123" userId="johnpapa" />*/}
                {window.screen.width < 600 ? sharedBottomSheet : sharedPopup}
            </div>
        );
    }
}