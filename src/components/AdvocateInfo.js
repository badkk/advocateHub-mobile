import React, {Component} from 'react'
import Menu from './commons/Menu'
import {Paper, IconButton, FontIcon, MenuItem, IconMenu, Avatar, ListItem} from 'material-ui'
import {cyan500} from 'material-ui/styles/colors';
/**
 * Created by lucas on 2017/7/4.
 * Advocate Info Page
 */
const addPerson = <FontIcon className="material-icons">person_add</FontIcon>;

class AdvocateInfoBar extends Component{
    constructor(props) {
        super(props);
        this.state={
            open: false
        };
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
export default class AdvocateInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history
        }
    }
    render() {
        const personalGenPanel = (
            <Paper>

            </Paper>
        );
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
