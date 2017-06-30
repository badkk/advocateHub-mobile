import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import '../../styles/Menu.css'
import Strings from '../../res/values/string'

const articleIcon = <FontIcon className="material-icons">assignment</FontIcon>;
const relatedIcon = <FontIcon className="material-icons">cloud</FontIcon>;
const advocateIcon = <FontIcon className="material-icons">person</FontIcon>;
const moreIcon = <FontIcon className="material-icons">subject</FontIcon>;

/**
 * Footer menu for all pages
 * Created by t-zikfan on 2017/6/30.
 */
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            history: this.props.history,
            selectedIndex: this.props.state,
        };
    }
    handleSelect(idx) {
        this.setState({
            selectedIndex: idx
        });
        /*let path = '/';
        switch (idx) {
            case 0 :
                path = '/';
                break;
            case 1:
                path = '/explore';
                break;
            case 2:
                path = 'advocates';
                break;
            case 3:
                path = 'more';
                break;
            default:
                path = '/';
        }
        this.state.history.push(path);*/
    }
    render() {
        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={this.state.selectedIndex} className="menu-box" >
                    <BottomNavigationItem
                        label={Strings.menuItem1}
                        icon={articleIcon}
                        onTouchTap={() => this.handleSelect(0)}
                    />
                    <BottomNavigationItem
                        label={Strings.menuItem2}
                        icon={relatedIcon}
                        onTouchTap={() => this.handleSelect(1)}
                    />
                    <BottomNavigationItem
                        label={Strings.menuItem3}
                        icon={advocateIcon}
                        onTouchTap={() => this.handleSelect(2)}
                    />
                    <BottomNavigationItem
                        label={Strings.menuItem4}
                        icon={moreIcon}
                        onTouchTap={() => this.handleSelect(3)}
                    />
                </BottomNavigation>
            </Paper>);
    }
}