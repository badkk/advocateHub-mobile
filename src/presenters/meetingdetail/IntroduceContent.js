import React, {Component} from 'react'
import {IconButton} from 'material-ui'
import { ActionFavoriteBorder, ActionFavorite, ActionEvent} from 'material-ui/svg-icons'
import { grey500, pink500, cyan500 } from 'material-ui/styles/colors'
import Map from '../../utils/googleMap'
import {
    GoogleMap,
    Marker,
} from "react-google-maps";
/**
 * Created by t-zikfan on 2017/7/5.
 * Meeting page Introduction Content Page
 */
const googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyAAo8Kywz_wD6ptjSEAGbdEltqxWpXUBSc";

function Web({meeting, clickLiked, liked}) {
    const subTitleStyle = {
        fontWeight: 500
    };
    const confTitleStyle = {
        paddingLeft: '10px'
    };
    const titlePanel = (
        <div className="meeting-introduction-title-panel">
            <h1>{meeting.name}</h1>
            <div className="meeting-introduction-title-subpanel">
                <a href="/"># {meeting.tags ? meeting.tags.join(', ') : 'Others'}</a>
                <div className="meeting-introduction-title-liks-panel">
                    <IconButton onTouchTap={clickLiked}>
                        { liked ? <ActionFavorite color={pink500}/> : <ActionFavoriteBorder color={grey500}/> }
                    </IconButton>
                    <a>{(!('likedNum' in meeting) ? 0 : meeting['likedNum']) + ' likes'}</a>
                </div>
            </div>
            <hr/>
        </div>
    );
    const conferencePanel = (
        <div className="meeting-introduction-conf-panel">
            <h3 style={subTitleStyle}>Related Event</h3>
            <div className="meeting-introduction-conf-title-panel">
                <ActionEvent color={cyan500}/>
                <span style={confTitleStyle}>
                    {new Date(meeting.date).toLocaleString()} : <a href={meeting.confLink ? meeting.confLink : '/'}>{meeting.cofName ? meeting.confName : 'Others'}</a>
                </span>
            </div>
            <hr/>
        </div>
    );
    const desPanel = (
        <div className="meeting-introduction-des-panel">
            <h3 style={subTitleStyle}>Description</h3>
            <blockquote>
                {meeting.description}
            </blockquote>
            <hr/>
        </div>
    );
    const twitterCommentPanel = (
        <div className="meeting-introduction-twitter-panel">
            <h3 style={subTitleStyle}>Comments on twitter</h3>

        </div>
    );
    const mapPanel = (
        <div className="meeting-introduction-des-panel">
            <GoogleMap
                defaultZoom={3}
                defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
                // Pass the map reference here as props
                googleMapURL={googleMapURL}
            >
            </GoogleMap>
        </div>
    );
    return (
        <div>
            <div>
                {titlePanel}
                {mapPanel}
            </div>
            {conferencePanel}
            {desPanel}
            {twitterCommentPanel}
        </div>
    );
}
function Mobile({meeting}) {

}
export default class IntroduceContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            liked: false
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
        const {meeting} = this.props;
        return (
            <div style={{height: 'auto'}} className="introduce-panel">
                <Web meeting={this.props.meeting} clickLiked={this.clickLiked} liked={this.state.liked}/>
            </div>
        );
    }

}
