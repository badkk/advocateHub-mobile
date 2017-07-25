import React from 'react'
import {Paper} from 'material-ui'
import '../../styles/HomeBar.css'
import MSLogo from './MSLogo'
/**
 * Created by t-zikunfan
 * Date: 15:43 2017/7/24
 */
export const homeBarHeight = 55;
export default function AdminAppBar({history, dark}) {
    /*const homeIcon = (
        <IconButton onTouchTap={() => {history.push('/')}}>
            <FontIcon ><ActionHome color={grey700}/></FontIcon>
        </IconButton>
    );*/
    const barStyle = dark ? "bar-paper admin-bar-paper admin-dark-bar" : "bar-paper admin-bar-paper admin-white-bar";
    const logoIcon = (
        <div className="logo-panel">
            <MSLogo size="25" logoEvent={() => {history.push('/admin')}}/>
            <span>Advocate Hub</span>
        </div>
    );
    return (
        <div className="bar-panel">
            <Paper zDepth={0} className={barStyle} style={{maxHeight: homeBarHeight}}>
                {logoIcon}
            </Paper>
            <hr/>
        </div>
    );
}