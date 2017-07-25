import React, {Component} from 'react'
import { Subheader, IconButton, Divider, Paper, FlatButton, List, ListItem, Avatar } from 'material-ui'
import { CommunicationLocationOn } from 'material-ui/svg-icons'
import { cyan500 } from 'material-ui/styles/colors'
import MeetingCard from '../commons/MeetingCard'
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
    this.state.cards = [
        <MeetingCard imgSrc="../johnpapa.png"
                     title="Angular on Azure"
                     subtitle="Learn how to deploy angular to Azure"
                     buttonTxt="Local&Online"
                     buttonEvent={() => {this.props.history.push('/meeting/johnpapa_123')}}
        />,
        <MeetingCard imgSrc="../face2.jpeg"
                     title="GPU-based Programming"
                     subtitle="How to using GPU programming on Python"
                     buttonTxt="Live"
                     buttonStyle="secondary"
                     buttonEvent={() => {}}
        />,
        <MeetingCard imgSrc="../face10.jpeg"
                     title="Dataflow in React"
                     subtitle="Explain the one-way dataflow in React"
                     buttonTxt="Local"
                     buttonEvent={() => {}}
        />,
        <MeetingCard imgSrc="../face11.jpeg"
                     title="React Virtual DOM"
                     subtitle="Learn the principle of Virtual DOM of React"
                     buttonTxt="Online"
                     buttonEvent={() => {}}
        />,
        <MeetingCard imgSrc="../face5.jpeg"
                     title="Tensorflow General Introduction"
                     subtitle="Learn the based structure of Tensorflow"
                     buttonTxt="Local&Online"
                     buttonEvent={() => {}}
        />,
        <MeetingCard imgSrc="../face1.jpeg"
                     title="Flask on Azure"
                     subtitle="Learn how to deploy Flask to Azure"
                     buttonTxt="Online"
                     buttonEvent={() => {}}
        />,
        <MeetingCard imgSrc="../face3.jpeg"
                     title="Introduce of CNTK"
                     subtitle="Learn about CNTK - A Deep learning tool"
                     buttonTxt="Online"
                     buttonEvent={() => {}}
        />,
    ];
    this.state.meetings = [
        <List>
            <div className="home-subheader">
                <Subheader inset={true}>Javascript</Subheader>
                <FlatButton label="more" primary={true}/>
            </div>
            <ListItem
                leftAvatar={<Avatar src="face10.jpeg" />}
                primaryText="Dataflow in React"
                secondaryText="Explain the one-way dataflow in React"
            />
            <ListItem
                leftAvatar={<Avatar src="face11.jpeg" />}
                primaryText="React Virtual DOM"
                secondaryText="Learn the principle of Virtual DOM of React"
            />
            <ListItem
                leftAvatar={<Avatar src="johnpapa.png" />}
                primaryText="Angular on Azure"
                secondaryText="Learn how to deploy angular to Azure"
            />
            <ListItem
                leftAvatar={<Avatar src="face12.jpeg" />}
                primaryText="Next version of React Native"
                secondaryText="Learn the updated news of React Native"
            />
        </List>,
        <List>
            <div className="home-subheader">
                <Subheader inset={true}>Python</Subheader>
                <FlatButton label="more" primary={true}/>
            </div>
            <ListItem
                leftAvatar={<Avatar src="face1.jpeg" />}
                primaryText="Flask on Azure"
                secondaryText="Learn how to deploy Flask to Azure"
            />
            <ListItem
                leftAvatar={<Avatar src="face5.jpeg" />}
                primaryText="Tensorflow General Introduction"
                secondaryText="Learn the based structure of Tensorflow"
            />
        </List>,
        <List>
            <div className="home-subheader">
                <Subheader inset={true}>.NET</Subheader>
                <FlatButton label="more" primary={true}/>
            </div>
            <ListItem
                leftAvatar={<Avatar src="face7.png" />}
                primaryText="DotNET Introduction"
                secondaryText="Learn about basic Structure of DotNET"
            />
            <ListItem
                leftAvatar={<Avatar src="face8.jpeg" />}
                primaryText="Learn about DotNET JSON"
                secondaryText="Introduce about DotNET deploy & usage"
            />
            <ListItem
                leftAvatar={<Avatar src="face9.jpeg" />}
                primaryText="DotNET JSON Structures"
                secondaryText="learn the deep structure about .NET JSON"
            />
        </List>
    ];
    }
    render() {
        return (
            <div style={{overflowY: 'scroll', overflowX: 'hidden'}}>
                <div className="meetings-location-panel">
                    <Subheader className="meetings-location-panel-title">Minhang Area Shanghai, China</Subheader>
                    <IconButton><CommunicationLocationOn color={cyan500} style={{marginRight: '16px'}}/></IconButton>
                </div>
                <div className="meeting-local-panel">
                    <div className="meeting-mainheader-panel">
                        <p className="home-mainheader">Upcoming Meetings</p>
                        <FlatButton label="more" primary={true}/>
                    </div>
                    <div className="meeting-cards-panel">
                        {this.state.cards}
                    </div>
                </div>
                <div className="home-advocates-list">
                    <p className="home-mainheader">Aspects Meetings</p>
                    <Divider />
                    {_.map(this.state.meetings, (meeting) => {
                        return (
                            <div>
                                {meeting}
                                <Divider inset={true}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}