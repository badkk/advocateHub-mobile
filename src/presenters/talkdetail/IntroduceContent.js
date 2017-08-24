import React, {Component} from 'react'
import {IconButton} from 'material-ui'
import { ActionFavoriteBorder, ActionFavorite, ActionEvent, ImageTimer, CommunicationLocationOn } from 'material-ui/svg-icons'
import { grey500, pink500, cyan500 } from 'material-ui/styles/colors'
import {StaticMap} from '../../utils/googleMap'
import {Tweet} from 'react-twitter-widgets'
import {talkDetailClasses} from "../../styles/TalkDetailStyle"
/**
 * Created by t-zikfan on 2017/7/5.
 * Meeting page Introduction Content Page
 */
function OrgPanel({talk, clickLiked, liked}) {
    const subTitleStyle = {
        fontWeight: 500
    };
    const confTitleStyle = {
        paddingLeft: '10px'
    };
    const titlePanel = (
        <div className={talkDetailClasses.introSubContentPanel}>
            <h1>{talk.name}</h1>
            <div className={talkDetailClasses.introTitlePanel}>
                <a href="/"># {talk.tags ? talk.tags.join(', ') : 'Others'}</a>
                <div className={talkDetailClasses.introLikesPanel}>
                    <IconButton onTouchTap={clickLiked}>
                        { liked ? <ActionFavorite color={pink500}/> : <ActionFavoriteBorder color={grey500}/> }
                    </IconButton>
                    <a>{(!('likedNum' in talk) ? 0 : talk['likedNum']) + ' likes'}</a>
                </div>
            </div>
            <hr/>
        </div>
    );
    const conferencePanel = (
        <div className={talkDetailClasses.introSubContentPanel}>
            <h3 style={subTitleStyle}>Related Event</h3>
            <div className={talkDetailClasses.introIconTextPanel}>
                <ActionEvent color={cyan500}/>
                <span style={confTitleStyle}>
                    {new Date(talk.date).toLocaleString()} : <a href={talk.confLink ? talk.confLink : '/'}>{talk.cofName ? talk.confName : 'Others'}</a>
                </span>
            </div>
            <hr/>
        </div>
    );
    const desPanel = (
        <div className={talkDetailClasses.introSubContentPanel}>
            <h3 style={subTitleStyle}>Description</h3>
            <blockquote>
                {talk.description}
            </blockquote>
            <hr/>
        </div>
    );
    const tweetContent = talk.tweetId ? <Tweet tweetId={talk.tweetId}/> : null;
    const twitterCommentPanel = (
        <div className={talkDetailClasses.introSubContentPanel}>
            <h3 style={subTitleStyle}>Comments on twitter</h3>
            {tweetContent}
        </div>
    );
    /* map container */
    const lat = 'lat' in talk ? talk.lat : 31.2304;
    const lng = 'lng' in talk ? talk.lng : 121.4737;
    const pos = {
        lat: lat,
        lng: lng
    };
    const marker = {
        position: pos,
        key: talk.location,
        defaultAnimation: 2,
    };

    const mapPanel = (
        <div className={talkDetailClasses.introSubContentPanel}>
            <h3 style={subTitleStyle}>Location & Time</h3>
            <StaticMap pos={pos} marker={marker}/>
            <div className={talkDetailClasses.introIconTextPanel}>
                <CommunicationLocationOn color={cyan500}/>
                <span style={confTitleStyle}>
                    {talk.location}
                </span>
            </div>
            <div className={talkDetailClasses.introIconTextPanel}>
                <ImageTimer color={cyan500}/>
                <span style={confTitleStyle}>
                    {new Date(talk.date).toLocaleString()}
                </span>
            </div>
        </div>
    );
    //TODO
    return (
        <div className={talkDetailClasses.introContentPanel}>
            <div className={talkDetailClasses.introContentInnerPanel}>
                {titlePanel}
                {conferencePanel}
                {desPanel}
                {twitterCommentPanel}
            </div>
            <div className={talkDetailClasses.introContentInnerPanel}>
                {mapPanel}
            </div>
        </div>
    );

}
export default class IntroduceContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
        };
        this.clickLiked = this.clickLiked.bind(this);
    }
    clickLiked() {
        const oldLiked = this.state.liked;
        this.setState({
            liked: !oldLiked
        });
    }
    render() {
        return (
            <OrgPanel
                talk={this.props.talk}
                clickLiked={this.clickLiked}
                liked={this.state.liked}
            />
        );
    }
}
