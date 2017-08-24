import React from 'react'
import {FontIcon, IconButton} from 'material-ui'
import {HardwareKeyboardArrowLeft} from 'material-ui/svg-icons'
import {grey700} from 'material-ui/styles/colors'
import MSLogo from './MSLogo'
import { appBarClasses } from "../../styles/AppBarStyles"
/**
 * Created by t-zikunfan
 * Date: 10:08 2017/7/21
 */
export default function AppBar({history}) {
    const backIcon = (
        <IconButton
            onTouchTap={() => {
                if (history.length <= 2) {
                   history.push('/')
                } else {
                    history.goBack()
                }
            }}
            className={appBarClasses.backIconButton}
        >
            <FontIcon ><HardwareKeyboardArrowLeft color={grey700}/></FontIcon>
        </IconButton>
    );
    const logoIcon = (
        <div className={appBarClasses.logoPanel}>
            <MSLogo size="25" logoEvent={() => {history.push('/')}}/>
            <span className={appBarClasses.logoTitle}>Advocate Hub</span>
        </div>
    );
    return (
        <div className={appBarClasses.barPanel}>
            <div className={appBarClasses.barContainer}>
                {backIcon}
                {logoIcon}
                <div/>
            </div>
            <hr className={appBarClasses.barHr}/>
        </div>
    );
}