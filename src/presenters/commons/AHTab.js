import React from 'react';
import {Tabs} from 'material-ui'
import { cyan500 } from 'material-ui/styles/colors';
import '../../styles/ContentTap.css'
/**
 * Created by lucas on 2017/7/4.
 * General Content Tap used in the whole App
 */
//Taps height is 45px
export default function AHTab({tabs, tabChangeHandler, slideIdx}) {
    /*const tabs = _.map(this.state.tabNames, (tabName, idx) => {
        return <Tab label={tabName} value={idx} />
    });*/
    return (
        <div>
            <Tabs
                onChange={tabChangeHandler}
                value={slideIdx}
                className='content-taps'
                inkBarStyle={{backgroundColor: cyan500}}
            >
                {tabs}
            </Tabs>
            <hr style={{margin:0, width:'100%'}}/>
           {/* <SwipeableViews
                index={this.state.slideIndex}
                onChangeIndex={this.handleChange}
                disabled={!this.state.swipeable}
            >
                {this.state.contents}
            </SwipeableViews>*/}
        </div>
    );

}