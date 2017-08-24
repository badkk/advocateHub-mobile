import React from 'react'
import { Avatar } from 'material-ui'
import {textAvatarClasses} from "../../styles/TextAvatarStyles";
/**
 * Created by t-zikfan on 2017/7/17.
 *
 */
export default function TextAvatar({src="MSLogo.jpg", title, touchFunc}) {
    return (
        <div className={textAvatarClasses.avatarPanel}>
            <Avatar src={src} onTouchTap={touchFunc} size={50} className={textAvatarClasses.avatarContent}/>
            <p className={textAvatarClasses.avatarTitle}>{title}</p>
        </div>
    );
}