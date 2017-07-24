import React, {Component} from 'react'
import {Paper, FontIcon, IconButton} from 'material-ui'
import {ActionHome, HardwareKeyboardArrowLeft} from 'material-ui/svg-icons'
import {grey700} from 'material-ui/styles/colors'
import '../../styles/HomeBar.css'
import MSLogo from './MSLogo'
/**
 * Created by t-zikunfan
 * Date: 10:08 2017/7/21
 */
export const homeBarHeight = 55;
export default function HomeBar({history}) {
    const backIcon = <IconButton
        onTouchTap={() => {
            if (history.length <= 2) {
               history.push('/')
            } else {
                history.goBack()
            }
        }}>
            <FontIcon ><HardwareKeyboardArrowLeft color={grey700}/></FontIcon>
        </IconButton>;
    /*const homeIcon = (
        <IconButton onTouchTap={() => {history.push('/')}}>
            <FontIcon ><ActionHome color={grey700}/></FontIcon>
        </IconButton>
    );*/
    const logoIcon = (
        <div className="logo-panel">
            <MSLogo size="25" logoEvent={() => {history.push('/')}}/>
            <span>Advocate Hub</span>
        </div>
    );
    return (
        <div className="bar-panel">
            <Paper zDepth={0} className="bar-paper" style={{maxHeight: homeBarHeight}}>
                {backIcon}
                {logoIcon}
                <div/>
            </Paper>
            <hr/>
        </div>
    );
}