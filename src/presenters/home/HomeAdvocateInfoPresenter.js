import React from 'react'
import {List, Subheader, FlatButton, ListItem, Avatar, Paper, Divider} from 'material-ui'
import { SocialWhatshot, } from 'material-ui/svg-icons'
import Slider from 'react-slick'
import { red500 } from 'material-ui/styles/colors'
import * as _ from "underscore";
import BtmTextAvatar from '../commons/BtmTextAvatar'

export default function HomeAdvocateInfoPresenter({bodyHeight, history}) {
    /* Carousel */
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    const content = [
        <div className="home-activity-shows" style={{backgroundColor: '#EC407A'}}>Azure Info1</div>,
        <div className="home-activity-shows" style={{backgroundColor: '#3F51B5'}}>Azure Info2</div>,
        <div className="home-activity-shows" style={{backgroundColor: '#8BC34A'}}>Azure Info3</div>
    ];
    const carouselContent = (
        <div>
            <Slider {...settings}>
                {content}
            </Slider>
        </div>
    );
    const topAdvocates = [
        <BtmTextAvatar title="Paul O’Shannessy" src="face10.jpeg"/>,
        <BtmTextAvatar title="John Papa" src="johnpapa.png" touchFunc={() => {history.push('/advocate/johnpapa')}}/>,
        <BtmTextAvatar title="Dimitrios Zorbas" src="face1.jpeg"/>,
        <BtmTextAvatar title="Gabriele Petronella" src="face2.jpeg"/>,
        <BtmTextAvatar title="Mark Lacey" src="face3.jpeg"/>,
        <BtmTextAvatar title="David Lavieri" src="face4.jpeg"/>
    ];
    const lists = [
        <List>
            <div className="home-aspects-subheader">
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
            <div className="home-aspects-subheader">
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
            <div className="home-aspects-subheader">
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
    return (
        <div style={{height: bodyHeight, overflowY: 'scroll', overflowX: 'hidden'}}>
            <div> {carouselContent} </div>
            <Paper zDepth={0}>
                <p className="top-advocates-title">Top Advocates</p>
                <Divider insert={true}/>
                <div className="top-advocates-panel">
                    {topAdvocates}
                </div>
            </Paper>
            <div className="home-advocates-list">
                <p className="top-advocates-title">Aspects Advocates</p>
                <Divider />
                {_.map(lists, (list) => {
                    return (
                        <div>
                            {list}
                            <Divider inset={true}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}