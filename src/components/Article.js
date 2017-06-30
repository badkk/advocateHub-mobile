import React, {Component} from 'react';
import Menu from './commons/Menu'
import get from '../restful/Get'
import {Paper, Avatar, ListItem, IconMenu, MenuItem, IconButton, FontIcon} from 'material-ui/';
import {cyan500} from 'material-ui/styles/colors';
import '../styles/Articles.css'
import Markdown from '../res/md'

var ReactMarkdown = require('react-markdown');
/**
 * Created by t-zikfan on 2017/6/30.
 * Article page
 */
class AdvocateInfoBar extends Component{
    render() {
        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="more"
                tooltipPosition="bottom-left">
                <FontIcon className="material-icons" color={cyan500}>add_circle</FontIcon>;
            </IconButton>
        );
        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem>Twitter</MenuItem>
                <MenuItem>Github</MenuItem>
                <MenuItem>Facebook</MenuItem>
            </IconMenu>
        );
        const height = window.screen.height * 0.12;
        return (
            <Paper style={{maxHeight: height}}>
                <ListItem
                    primaryText="Zikun Fan"
                    secondaryText="Node.js, .NET, React"
                    leftAvatar={<Avatar src="avatar.jpg" />}
                    rightIconButton={rightIconMenu}
                    style={{width:"100%"}}
                />
            </Paper>
        );
    }
}
class Content extends Component {
    render() {
        const content = Markdown.art1;
        const maxHeight = window.screen.height * 0.8;
        return (
            <div className="content-panel" style={{maxHeight:maxHeight}}>
                <ReactMarkdown source={content} />
            </div>);
    }
}

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history,
            data: ''
        };
        this.init = this.init.bind(this);
    }
    componentDidMount() {
        this.init();
    }
    init() {
        get('/user').then(res => {
            this.setState({
                data: res['data']
            })
        })
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                <AdvocateInfoBar />
                <Content/>
                <Menu history={ this.state.history } state={0}/>
            </div>);
    }
}