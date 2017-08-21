import React from 'react'
import { Divider, List, ListItem, Avatar } from 'material-ui'
import TalkCard from '../commons/TalkCard'
import * as _ from "underscore";
/**
 * Created by t-zikunfan 7/21/2017
 * Home Meeting tag page
 * */
export default function HomeMeetingInfoPresenter({history, talks, upcomingTalks}){

    const upcomingTalksPanel = (
        <div className="meeting-local-panel">
            <div className="meeting-mainheader-panel">
                <p className="home-mainheader">Upcoming Talks</p>
                {/* <FlatButton label="more" primary={true}/>*/}
            </div>
            <div className="meeting-cards-panel">
                {
                    _.map(upcomingTalks, (talk, idx) => (
                        <TalkCard
                            key={idx}
                            imgSrc={talk.advocator.avatar}
                            title={talk.name}
                            subtitle={'# ' + (talk.tags ? talk.tags.join(', ') : 'Others')}
                            date={new Date(talk.date).toString().substring(0, 10)}
                            likes={talk.likedNum ? talk.likedNum : '0'}
                            buttonEvent={() => {history.push('/talk/' + talk._id)}}
                        />
                    ))
                }
            </div>
        </div>
    );
    const contentListPanel = (
        <div className="home-advocates-list">
            <p className="home-mainheader">Talks</p>
            <Divider />
            <List>
                {_.map(talks, (talk, idx) => {
                    return (
                        <ListItem
                            key={idx}
                            leftAvatar={<Avatar src={talk.advocator ? talk.advocator.avatar : null} />}
                            primaryText={talk.name}
                            secondaryText={"Created on " + new Date(talk.date).toString().substring(0, 10)}
                            onTouchTap={() => {history.push('/talk/' + talk._id)}}
                        />
                    );
                })}
            </List>
        </div>
    );
        return (
            <div className="home-sub-panel">
                {upcomingTalksPanel}
                {contentListPanel}
            </div>
        );

}