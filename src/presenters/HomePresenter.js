import React, {Component} from 'react'
import SearchBar from 'material-ui-search-bar'
import { Paper, SvgIcon, Divider, ListItem, List, Subheader, Avatar, FlatButton} from 'material-ui'
import Slider from 'react-slick'
import Menu from './Menu'
import BtmTextAvatar from './BtmTextAvatar'
import '../styles/Home.css'
import { red500 } from 'material-ui/styles/colors'
import { SocialWhatshot } from 'material-ui/svg-icons'
import * as _ from "underscore";
/**
 * Created by lucas on 2017/7/16.
 * The Home page
 */
const appBarHeight = window.screen.height * 0.22;
const bodyHeight = window.screen.height * 0.70;
export default class HomePresenter extends Component{
    render() {
        //ms logo
        const LogoIcon =  (props) => (
            <SvgIcon
                {...props}
                viewBox="0 0 64 64"
                className="icon"
                style={{height: '35px', width: '35px', marginLeft: 0}}
            >
                <path className="st0" d="M0 0h30v30H0z"/>
                <path className="st1" d="M34 0h30v30H34z"/>
                <path className="st2" d="M34 34h30v30H34z"/>
                <path className="st3" d="M0 34h30v30H0z"/>
            </SvgIcon>
        );
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
            <BtmTextAvatar title="John Papa" src="johnpapa.png" touchFunc={() => {this.props.history.push('/advocate/johnpapa')}}/>,
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
            <div className="home-background-div">
                <Paper zDepth={0} style={{height: appBarHeight}} className="home-app-header">
                    <div className="home-logo-div">
                        <LogoIcon />
                        <div>
                            <p className="home-title">Advocate Hub</p>
                            <p className="home-subtitle">Find the coolest tech stuff here</p>
                        </div>
                    </div>
                    <SearchBar
                        hintText="Search advocate or techs"
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                    />
                </Paper>
                <div style={{height: bodyHeight, overflowY: 'scroll', overflowX: 'hidden'}}>
                    <div> {carouselContent} </div>
                    <Paper zDepth={0}>
                        <p className="top-advocates-title">Top Advocates</p>
                        <Divider />
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
                <Menu history={ this.props.history} state={2}/>
            </div>
        );
    }
}
