import React, {Component} from 'react'
import Menu from './commons/Menu'
import {Paper, IconButton, FontIcon, MenuItem, IconMenu, Avatar, ListItem, AppBar, FloatingActionButton, RaisedButton, List, Divider} from 'material-ui'
import {cyan500} from 'material-ui/styles/colors';
import "../styles/AdvocateInfo.css"
import { BottomSheet } from 'material-ui-bottom-sheet';
import { SocialPersonAdd } from 'material-ui/svg-icons'
import {grey500} from 'material-ui/styles/colors'

/**
 * Created by lucas on 2017/7/4.
 * Advocate Info Page
 */
class AdvocateInfoBar extends Component{
    constructor(props) {
        super(props);
        this.state={
            open: false,
            isOpen: false
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleBSPopout = this.handleBSPopout.bind(this);
    }
    handleMenuClick(e, item) {
        const itemName = item.key === '0' ? "Twitter" : item.key === '1' ? "Github" : "Facebook";
        console.log(itemName);
        this.setState({
            open: true
        })
    }
    handleBSPopout() {
        this.setState({
            isOpen: true
        })
    }

    render() {
        const iconButtonElement = (
            <RaisedButton primary={true} className="follow-button" label="Follow" onTouchTap={this.handleBSPopout}/>
        );
        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}  onItemTouchTap={this.handleMenuClick}>
                <MenuItem rightIcon={<SocialPersonAdd/>} key={0}>Twitter</MenuItem>
                <MenuItem rightIcon={<SocialPersonAdd/>} key={1}>Github</MenuItem>
                <MenuItem rightIcon={<SocialPersonAdd/>} key={2}>Facebook</MenuItem>
            </IconMenu>
        );
        const height = window.screen.height * 0.12;
        /* Bottom shared sheet */
        const sharedBottomSheet = <div>
            <BottomSheet
                action={
                    <FloatingActionButton>
                        <SocialPersonAdd/>
                    </FloatingActionButton>
                }
                onRequestClose={() => this.setState({isOpen: false})}
                open={this.state.isOpen}>
                <h4 style={{color: grey500, marginLeft: '25px'}}>Share this meeting</h4>
                <Divider inset/>
                <List>
                    <ListItem primaryText="Facebook" leftIcon={<SocialPersonAdd/>}/>
                    <ListItem primaryText="Twitter" leftIcon={<SocialPersonAdd/>}/>
                    <ListItem primaryText="Google+" leftIcon={<SocialPersonAdd/>}/>
                </List>
            </BottomSheet>
        </div>;
        return (
            <Paper style={{maxHeight: height}}>

                <ListItem
                    primaryText="John Papa"
                    secondaryText="Node.js, .NET, React"
                    leftAvatar={<Avatar src="johnpapa.png" />}
                    rightIconButton={iconButtonElement}
                    style={{width:"100%"}}
                />
                {sharedBottomSheet}
            </Paper>
        );
    }
}
export default class AdvocateInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history
        }
    }
    handleBack = () => {
        this.state.history.goBack();
    };
    render() {
        const iFramePanelHeight = window.screen.height * 0.8;
        return (
            <div>
                <AdvocateInfoBar />
                <iframe src="https://johnpapa.net/" height={iFramePanelHeight} width='100%' frameBorder="0"/>
                <Menu history={ this.state.history} state={2}/>
            </div>
        );
    }
}
