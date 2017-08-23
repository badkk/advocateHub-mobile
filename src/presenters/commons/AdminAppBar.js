import React from 'react'
import {Avatar} from 'material-ui'
import MSLogo from './MSLogo'
import {appBarClasses} from "../../styles/AppBarStyles"
/**
 * Created by t-zikunfan
 * Date: 15:43 2017/7/24
 */
export const homeBarHeight = 55;
export default function AdminAppBar({history, avatarUrl=null, avatarTapEvent=() => {}}) {
    /*const homeIcon = (
        <IconButton onTouchTap={() => {history.push('/')}}>
            <FontIcon ><ActionHome color={grey700}/></FontIcon>
        </IconButton>
    );*/
    const avatar = avatarUrl ? <Avatar src={avatarUrl} onTouchTap={avatarTapEvent} className={appBarClasses.adminAvatar}/> : <div/>;

    const logoIcon = (
        <div className={appBarClasses.logoPanel}>
            <MSLogo size="25" logoEvent={() => {history.push('/admin')}}/>
            <span style={{color: 'white'}}>Advocate Hub</span>
        </div>
    );
    return (
        <div className={appBarClasses.barPanel}>
            <div className={appBarClasses.adminBarStyle}>
                <div/>
                {logoIcon}
                {avatar}
            </div>
        </div>
    );
}