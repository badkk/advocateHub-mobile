import React from 'react'
import {List, Subheader, ListItem, Avatar, Divider} from 'material-ui'
import { SocialWhatshot, } from 'material-ui/svg-icons'
import { red500 } from 'material-ui/styles/colors'
import * as _ from "underscore";
import TextAvatar from '../commons/TextAvatar'
import { homeClasses } from "../../styles/HomeStyles"

function tagsClassifier(itemWithTags, history) {
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
        <div className={homeClasses.upperContentPanel}>
            <p className={homeClasses.contentTitle}>Top Advocates</p>
            <Divider/>
            <div className={homeClasses.topAdvocatesPanel}>
                {_.map(topAdvocates, (advo, index) => (
                    <TextAvatar key={index}
                                title={advo.name}
                                src={advo.avatar}
                                touchFunc={() => {history.push('/advocate/' + advo.id)}}
                    />
                ))}
            </div>
        </div>
    );
    const contentListPanel = (
        <div>
            <p className={homeClasses.contentTitle}>Advocates</p>
            <Divider />
            <div>
                <List>
                    {tagsClassifier(advocatesWithTags, history)}
                </List>
            </div>
        </div>
    );
    return (
        <div className={homeClasses.contentPanel}>
            {topAdvocatesPanel}
            {contentListPanel}
        </div>
    );

}