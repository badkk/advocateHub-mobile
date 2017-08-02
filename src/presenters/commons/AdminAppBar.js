import React from 'react'
import {Paper, Avatar} from 'material-ui'
import '../../styles/HomeBar.css'
import MSLogo from './MSLogo'
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
    const avatar = avatarUrl ?
        <div className="admin-bar-avatar">
            <Avatar src={avatarUrl} onTouchTap={avatarTapEvent} style={{cursor: 'pointer'}}/>
        </div> :
        <div/>;
    const logoClassName= avatarUrl ? "logo-panel admin-logo-panel-with-avatar" : "logo-panel";
    const logoIcon = (
        <div className={logoClassName}>
            <MSLogo size="25" logoEvent={() => {history.push('/admin')}}/>
            <span>Advocate Hub</span>
        </div>
    );
    return (
        <div className="bar-panel">
            <Paper zDepth={0} className="bar-paper admin-bar-paper admin-dark-bar" style={{maxHeight: homeBarHeight}}>
                <div/>
                {logoIcon}
                {avatar}
            </Paper>
        </div>
    );
}