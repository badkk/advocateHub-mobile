import React from 'react'
import { Divider, List, ListItem, Avatar } from 'material-ui'
import TalkCard from '../commons/TalkCard'
import * as _ from "underscore";
import { homeClasses } from "../../styles/HomeStyles"
/**
 * Created by t-zikunfan 7/21/2017
 * Home Meeting tag page
 * */
export default function HomeMeetingInfoPresenter({history, talks, upcomingTalks}){

    const upcomingTalksPanel = (
        <div className={homeClasses.upperContentPanel}>
            <p className={homeClasses.contentTitle}>Upcoming Talks</p>
            <div className={homeClasses.upcomingTalksPanel}>
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
        <div>
            <p className={homeClasses.contentTitle}>Talks</p>
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
            <div className={homeClasses.contentPanel}>
                {upcomingTalksPanel}
                {contentListPanel}
            </div>
        );

}