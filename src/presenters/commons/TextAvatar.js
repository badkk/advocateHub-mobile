import React from 'react'
import { Avatar } from 'material-ui'
import '../../styles/CustomAvatar.css'
/**
 * Created by t-zikfan on 2017/7/17.
 *
 */
export default function TextAvatar({src="MSLogo.jpg", title, touchFunc}) {
    return (
        <div className="avatar-panel" >
            <Avatar src={src} onTouchTap={touchFunc} size={50} className="btm-avatar"/>
            <p>{title}</p>
        </div>
    );
}