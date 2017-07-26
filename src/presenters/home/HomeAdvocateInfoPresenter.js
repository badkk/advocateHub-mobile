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
            var advocators = res['data'];
            this.setState({
                advocators: advocators
            });
            this.setState({
                topAdvocators: _.first(_.sortBy(advocators, (x) => x.popularity * -1), 4)
            });
        });
        
        /*
        this.state.topAdvocators = [
            <BtmTextAvatar key={0} title="Paul O’Shannessy11" src="face10.jpeg"/>,
            <BtmTextAvatar key={1} title="John Papa" src="johnpapa.png"/>,
            <BtmTextAvatar key={2} title="Dimitrios Zorbas" src="face1.jpeg"/>,
            <BtmTextAvatar key={3} title="Gabriele Petronella" src="face2.jpeg"/>,
            <BtmTextAvatar key={4} title="Mark Lacey" src="face3.jpeg"/>,
            <BtmTextAvatar key={5} title="David Lavieri" src="face4.jpeg"/>
        ];
        */
        /*
        this.state.advocators = [
        <List>
            <div className="home-subheader">
                <Subheader inset={true}>Javascript</Subheader>
                <FlatButton label="more" primary={true}/>
            </div>
            <ListItem
                rightIcon={<SocialWhatshot color={red500} />}
                leftAvatar={<Avatar src="face10.jpeg" />}
                primaryText="Paul O’Shannessy"
                secondaryText="JS, React"
            />
            <ListItem
                leftAvatar={<Avatar src="face11.jpeg" />}
                primaryText="Ben Alpert"
                secondaryText="JS, React, "
            />
            <ListItem
                rightIcon={<SocialWhatshot color={red500} />}
                leftAvatar={<Avatar src="johnpapa.png" />}
                primaryText="John Papa"
                secondaryText="JS, Angular, React, Azure, .NET"
            />
            <ListItem
                rightIcon={<SocialWhatshot color={red500} />}
                leftAvatar={<Avatar src="face12.jpeg" />}
                primaryText="Pieter De Baets"
                secondaryText="JS, ReactNative, "
            />
        </List>,
        <List>
            <div className="home-subheader">
                <Subheader inset={true}>Python</Subheader>
                <FlatButton label="more" primary={true}/>
            </div>
            <ListItem
                rightIcon={<SocialWhatshot color={red500} />}
                leftAvatar={<Avatar src="face1.jpeg" />}
                primaryText="Dimitrios Zorbas"
                secondaryText="Python, CNTK, Tensorflow"
            />
            <ListItem
                leftAvatar={<Avatar src="face5.jpeg" />}
                primaryText="Changming Sun"
                secondaryText="Python, Tensorflow"
            />
            <ListItem
                leftAvatar={<Avatar src="face6.png" />}
                primaryText="Benoit Steiner"
                secondaryText="Python, C++, Tensorflow"
            />
        </List>,
        <List>
            <div className="home-subheader">
                <Subheader inset={true}>.NET</Subheader>
                <FlatButton label="more" primary={true}/>
            </div>
            <ListItem
                rightIcon={<SocialWhatshot color={red500} />}
                leftAvatar={<Avatar src="face7.png" />}
                primaryText="James NewtonKing"
                secondaryText=".NET, C#"
            />
            <ListItem
                leftAvatar={<Avatar src="face8.jpeg" />}
                primaryText="Tyler Brinkley"
                secondaryText="C#, .NET"
            />
            <ListItem
                leftAvatar={<Avatar src="face9.jpeg" />}
                primaryText="Jon Hanna"
                secondaryText="C#, C++, .NET, JSON.NET"
            />
        </List>
    ];
    */
    }
    render() {
        return (
            <div style={{overflowY: 'scroll', overflowX: 'hidden'}}>
                <Paper zDepth={0}>
                    <p className="home-mainheader">Top Advocates</p>
                    <Divider/>
                    <div className="top-advocates-panel">
                        {_.map(this.state.topAdvocators, (topAdvocator, index) => (
                            <BtmTextAvatar key={index} title={topAdvocator.username} src={topAdvocator.avatar} touchFunc={() => {this.props.history.push('/advocate/johnpapa')}}/>
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
                                        primaryText={advocator.username}
                                        secondaryText={advocator.tags.join(", ")}
                                        onTouchTap={() => {this.props.history.push('/advocate/johnpapa')}}
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