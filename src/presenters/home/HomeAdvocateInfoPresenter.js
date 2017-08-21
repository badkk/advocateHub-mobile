import React from 'react'
import {List, Subheader, ListItem, Avatar, Paper, Divider} from 'material-ui'
import { SocialWhatshot, } from 'material-ui/svg-icons'
import { red500 } from 'material-ui/styles/colors'
import * as _ from "underscore";
import BtmTextAvatar from '../commons/BtmTextAvatar'

function tagsPresenter(itemWithTags, history) {
    return _.map(_.keys(itemWithTags), (tag, index) => {
        return (
            <div key={index}>
                <Subheader inset={true}>{tag}</Subheader>
                {
                    _.map(itemWithTags[tag], (advocate, index) => (
                        <ListItem
                            rightIcon={(advocate.popularity > 80 ) ? (<SocialWhatshot color={red500}/>) : null}
                            leftAvatar={<Avatar src={advocate.avatar}/>}
                            primaryText={advocate.name}
                            secondaryText={advocate.tags ? advocate.tags.join(", ") : ""}
                            onTouchTap={() => {
                                history.push('/advocate/' + advocate.id)
                            }}
                            key={index}
                        />
                    ))
                }
            </div>
        )
    })
}

export default function ({history, topAdvocates, advocates, advocatesWithTags}) {
    const topAdvocatesPanel = (
        <Paper zDepth={0} className="home-sub-upper-panel">
            <p className="home-mainheader">Top Advocates</p>
            <Divider/>
            <div className="top-advocates-panel">
                {_.map(topAdvocates, (advo, index) => (
                    <BtmTextAvatar key={index}
                                   title={advo.name}
                                   src={advo.avatar}
                                   touchFunc={() => {history.push('/advocate/' + advo.id)}}
                    />
                ))}
            </div>
        </Paper>
    );
    const contentListPanel = (
        <div className="home-advocates-list">
            <p className="home-mainheader">Advocates</p>
            <Divider />
            <div>
                <List>
                    {tagsPresenter(advocatesWithTags, history)}
                </List>
            </div>
        </div>
    );
    return (
        <div className="home-sub-panel">
            {topAdvocatesPanel}
            {contentListPanel}
        </div>
    );

}