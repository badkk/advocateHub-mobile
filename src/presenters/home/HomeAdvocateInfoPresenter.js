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
        return (
            <div style={{overflowY: 'scroll', overflowX: 'hidden'}}>
                <Paper zDepth={0}>
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
                            {_.map(this.state.advocators, (advocator, index) => (
                                    <ListItem
                                        rightIcon={(advocator.popularity > 80 )?(<SocialWhatshot color={red500}/>):null}
                                        leftAvatar={<Avatar src={advocator.avatar}/>}
                                        primaryText={advocator.name}
                                        secondaryText={advocator.tags ? advocator.tags.join(", ") : ""}
                                        onTouchTap={() => {this.props.history.push('/advocate/' + advocator.id)}}
                                        key={index}
                                    />
                                )
                            )}
                        </List>
                    </div>
                </div>
            </div>
        );
    }
}