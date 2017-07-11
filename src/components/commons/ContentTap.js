import React, {Component} from 'react';
import {Tabs, Tab, Paper} from 'material-ui'
import { cyan500 } from 'material-ui/styles/colors';
import SwipeableViews from 'react-swipeable-views';
import '../../styles/ContentTap.css'
import _ from 'underscore'
/**
 * Created by lucas on 2017/7/4.
 * General Content Tap used in the whole App
 */
export default class ContentTap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabNames : this.props.tabNames,
            slideIndex: 0,
            contents: this.props.contents,
        }
    }
    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };
    render() {
        const tabs = _.map(this.state.tabNames, (tabName, idx) => {
            return <Tab label={tabName} value={idx} />
        });
        return (
            <div>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                    className='content-taps'
                    inkBarStyle={{backgroundColor: cyan500}}
                >
                    {tabs}
                </Tabs>
                <hr style={{margin:0, width:'100%'}}/>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    {this.state.contents}
                </SwipeableViews>
            </div>
        );
    }
}