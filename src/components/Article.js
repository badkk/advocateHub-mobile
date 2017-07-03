import React, {Component} from 'react';
import Menu from './commons/Menu'
import get from '../restful/Get'
import {Paper, Avatar, ListItem, IconMenu, MenuItem, IconButton, FontIcon} from 'material-ui/';
import {cyan500} from 'material-ui/styles/colors';
import '../styles/Articles.css'
import 'github-markdown-css'
import MarkdownContent from '../res/md'

const ReactMarkdown = require('react-markdown');
/**
 * Created by t-zikfan on 2017/6/30.
 * Article page
 */
const addPerson = <FontIcon className="material-icons">person_add</FontIcon>;

class AdvocateInfoBar extends Component{
    constructor(props) {
        super(props);
        this.state={
            open: false
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }
    handleMenuClick(e, item) {
        const itemName = item.key === '0' ? "Twitter" : item.key === '1' ? "Github" : "Facebook";
        console.log(itemName);
        this.setState({
            open: true
        })
    }
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
            <IconMenu iconButtonElement={iconButtonElement}  onItemTouchTap={this.handleMenuClick}>
                <MenuItem rightIcon={addPerson} key={0}>Twitter</MenuItem>
                <MenuItem rightIcon={addPerson} key={1}>Github</MenuItem>
                <MenuItem rightIcon={addPerson} key={2}>Facebook</MenuItem>
            </IconMenu>
        );
        const height = window.screen.height * 0.12;
        return (
            <Paper style={{maxHeight: height}}>
                <ListItem
                    primaryText="John Papa"
                    secondaryText="Node.js, .NET, React"
                    leftAvatar={<Avatar src="johnpapa.png" />}
                    rightIconButton={rightIconMenu}
                    style={{width:"100%"}}
                />
            </Paper>
        );
    }
}
class Content extends Component {
    render() {
        const content = MarkdownContent.art1;
        const maxHeight = window.screen.height * 0.8;
        return (
            <div className="content-panel" style={{maxHeight:maxHeight}}>
                <ReactMarkdown className="markdown-body" source={content} softBreak="br" sourcePos={true}/>
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
                <Menu history={ this.state.history } state={2}/>
            </div>);
    }
}