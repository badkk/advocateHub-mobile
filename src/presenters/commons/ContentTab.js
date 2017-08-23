import React from 'react';
import {Tabs} from 'material-ui'
import '../../styles/ContentTap.css'
/**
 * Created by lucas on 2017/7/4.
 * General Content Tap used in the whole App
 */
//Taps menuHeight is 45px
export const tabMenuHeight = 45;
export default function ContentTab({tabs, tabChangeHandler, slideIdx, stickyHeight, homeTab=false}) {
    /*const tabs = _.map(this.state.tabNames, (tabName, idx) => {
        return <Tab label={tabName} value={idx} />
    });*/
    const tab_style = homeTab ? "tab-home tab-panel" : "tab-panel";
    const line = !homeTab ? <hr style={{margin:0, width:'100%'}}/> : null;
    return (
        <div className={tab_style} style={{position: 'sticky', top: stickyHeight, zIndex: 100}}>
            <Tabs
                onChange={tabChangeHandler}
                value={slideIdx}
                className='content-taps'
            >
                {tabs}
            </Tabs>
            { line }
        </div>
    );

}