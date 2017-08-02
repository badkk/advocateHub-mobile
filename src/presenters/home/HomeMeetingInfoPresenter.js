import React, {Component} from 'react'
import { Subheader, IconButton, Divider, Paper, FlatButton, List, ListItem, Avatar } from 'material-ui'
import { CommunicationLocationOn } from 'material-ui/svg-icons'
import { cyan500 } from 'material-ui/styles/colors'
import MeetingCard from '../commons/MeetingCard'
import get from '../../restful/Get'
import * as _ from "underscore";
/**
 * Created by t-zikunfan 7/21/2017
 * Home Meeting tag page
 * */
export default class HomeMeetingInfoPresenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            meetings: []
        };
    }

    componentDidMount() {
        get('/meetings').then(res => {
            let meetings = res['data'];
            this.setState({
                meetings: meetings,
                upcomings: _.sortBy(_.filter(meetings, x => x.date > Date.now()), x => x.date)
            });
        });
    }
    render() {
        return (
            <div className="home-sub-panel">
                {/*<div className="meetings-location-panel">
                    <Subheader className="meetings-location-panel-title">Minhang Area Shanghai, China</Subheader>
                    <IconButton><CommunicationLocationOn color={cyan500} style={{marginRight: '16px'}}/></IconButton>
                </div>*/}
                <div className="meeting-local-panel">
                    <div className="meeting-mainheader-panel">
                        <p className="home-mainheader">Upcoming Meetings</p>
                       {/* <FlatButton label="more" primary={true}/>*/}
                    </div>
                    <div className="meeting-cards-panel">
                        {
                            _.map(this.state.upcomings, (meeting, idx) => (
                                <MeetingCard
                                    key={idx}
                                    imgSrc={meeting.advocator.avatar}
                                    title={meeting.name}
                                    subtitle={meeting.description}
                                    buttonTxt={new Date(meeting.date).toString().substring(0, 10)}
                                    buttonEvent={() => {this.props.history.push('/meeting/' + meeting._id)}}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="home-advocates-list">
                    <p className="home-mainheader">Meetings</p>
                    <Divider />
                    <List>
                        {_.map(this.state.meetings, (meeting, idx) => {
                            return (
                                <ListItem
                                    key={idx}
                                    leftAvatar={<Avatar src={meeting.advocator ? meeting.advocator.avatar : null} />}
                                    primaryText={meeting.name}
                                    secondaryText={"Created on " + new Date(meeting.date).toString().substring(0, 10)}
                                    onTouchTap={() => {this.props.history.push('/meeting/' + meeting._id)}}
                                />                              
                            );
                        })}
                    </List>
                </div>
            </div>
        );
    }
}