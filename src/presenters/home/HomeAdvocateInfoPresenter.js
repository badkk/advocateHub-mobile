import React, {Component} from 'react'
import {List, Subheader, FlatButton, ListItem, Avatar, Paper, Divider} from 'material-ui'
import { SocialWhatshot, } from 'material-ui/svg-icons'
import Slider from 'react-slick'
import { red500 } from 'material-ui/styles/colors'
import get from '../../restful/Get'
import * as _ from "underscore";
import BtmTextAvatar from '../commons/BtmTextAvatar'

export default class HomeAdvocateInfoPresenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topAdvocators: [],
            advocators: []
        };
    }
    componentDidMount() {
        get('/advocators').then(res => {
            let advocators = res['data'];
            this.setState({
                advocators: advocators
            });
            this.setState({
                topAdvocators: _.first(_.sortBy(_.filter(advocators, x=>x.popularity), x => x.popularity * -1), 4)
            });
        });
    }
    render() {
        let advocatorsWithTags = {};
        const pushTagFunc = (tag, item) => {
            if(tag in advocatorsWithTags) {
                advocatorsWithTags[tag].push(item);
            } else {
                advocatorsWithTags[tag] = [];
                advocatorsWithTags[tag].push(item);
            }
        };
        let advocatorWithoutTags = [];
        _.each(this.state.advocators, (advocator) => {
            if ('tags' in advocator) {
                _.each(advocator.tags, (tag) => {
                    pushTagFunc(tag, advocator);
                })
            } else {
                advocatorWithoutTags.push(advocator);
            }
        });
        //if not empty
        if (!_.isEmpty(advocatorWithoutTags)) advocatorsWithTags['Others'] = advocatorWithoutTags;
        return (
            <div className="home-sub-panel">
                <Paper zDepth={0} className="home-sub-upper-panel">
                    <p className="home-mainheader">Top Advocates</p>
                    <Divider/>
                    <div className="top-advocates-panel">
                        {_.map(this.state.topAdvocators, (topAdvocator, index) => (
                            <BtmTextAvatar key={index} title={topAdvocator.name} src={topAdvocator.avatar} touchFunc={() => {this.props.history.push('/advocate/' + topAdvocator.id)}}/>
                        ))}
                    </div>
                </Paper>
                <div className="home-advocates-list">
                    <p className="home-mainheader">Advocates</p>
                    <Divider />
                    <div>
                        <List>
                            {
                                _.map(_.keys(advocatorsWithTags), (tag, index) => {
                                    return (
                                        <div key={index}>
                                            <Subheader inset={true}>{tag}</Subheader>
                                            {
                                                _.map(advocatorsWithTags[tag], (advocator, index) => (
                                                    <ListItem
                                                        rightIcon={(advocator.popularity > 80 ) ? (<SocialWhatshot color={red500}/>) : null}
                                                        leftAvatar={<Avatar src={advocator.avatar}/>}
                                                        primaryText={advocator.name}
                                                        secondaryText={advocator.tags ? advocator.tags.join(", ") : ""}
                                                        onTouchTap={() => {
                                                            this.props.history.push('/advocate/' + advocator.id)
                                                        }}
                                                        key={index}
                                                    />
                                                ))
                                            }
                                        </div>
                                    )
                                })
                            }
                        </List>
                    </div>
                </div>
            </div>
        );
    }
}