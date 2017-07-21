import React from 'react'
import { Subheader, IconButton, Divider, Paper } from 'material-ui'
import { CommunicationLocationOn } from 'material-ui/svg-icons'
import { cyan500 } from 'material-ui/styles/colors'
import MeetingCard from '../commons/MeetingCard'
/**
 * Created by t-zikunfan 7/21/2017
 * Home Meeting tag page
 * */
export default function HomeMeetingInfoPresenter({bodyHeight, history}) {
    const cards = [
        <MeetingCard/>
    ];
    return (
        <div style={{height: bodyHeight, overflowY: 'scroll', overflowX: 'hidden'}}>
            <div className="meetings-location-panel">
                <Subheader className="meetings-location-panel-title">Minhang Area Shanghai, China</Subheader>
                <IconButton><CommunicationLocationOn color={cyan500} style={{marginRight: '16px'}}/></IconButton>
            </div>
            <div className="meeting-local-panel">
                <p className="home-mainheader">Local Meetings</p>
                <Divider />
            </div>
        </div>
    );

}