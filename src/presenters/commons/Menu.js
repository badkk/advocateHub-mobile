import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import { ActionAssessment, ActionAlarmOn, SocialPerson } from 'material-ui/svg-icons'
import Paper from 'material-ui/Paper';
import '../../styles/Menu.css'
import Strings from '../../res/values/string'

/**
 * Footer menu for all pages
 * Created by t-zikfan on 2017/6/30.
 */
//menu height = 8%
const height = window.screen.height * 0.08;
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            history: this.props.history,
            selectedIndex: this.props.state,
            userId: this.props.userId,
            meetingId: this.props.meetingId
        };
    }
    handleSelect(idx) {
        this.setState({
            selectedIndex: idx
        });
        let path = '/';
        switch (idx) {
            case 0 :
                path = '/meeting/' + this.state.meetingId;
                break;
            case 1:
                path = '/product/' + this.state.meetingId;
                break;
            case 2:
                path = '/advocate/' + this.state.userId;
                break;
            default:
                path = '/';
        }
        this.state.history.push(path);
    }
    render() {
        return (
            <Paper zDepth={1} style={{maxHeight:height}} className="menu-box" >
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label={Strings.menuItem3}
                        icon={<ActionAssessment/>}
                        onTouchTap={() => this.handleSelect(0)}
                    />
                    <BottomNavigationItem
                        label={Strings.menuItem2}
                        icon={<ActionAlarmOn />}
                        onTouchTap={() => this.handleSelect(1)}
                    />
                    <BottomNavigationItem
                        label={Strings.menuItem1}
                        icon={<SocialPerson />}
                        onTouchTap={() => this.handleSelect(2)}
                    />
                </BottomNavigation>
            </Paper>);
    }
}