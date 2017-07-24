import React from 'react'
import '../../styles/MeetingCard.css'
import { RaisedButton, Avatar} from 'material-ui'
/**
 * Created by t-zikunfan
 * Date: 17:27 2017/7/21
 */
export default function MeetingCard({
    imgSrc="MSLogo.jpg",
    title,
    subtitle,
    avatarStyle='normal',
    buttonTxt,
    buttonStyle='primary',
    buttonEvent}){
    const primary = buttonStyle === 'primary';
    const secondary = buttonStyle === 'secondary';
    const avatarClassName = avatarStyle === 'live' ? "card-avatar-live" : "card-avatar"
    return (
        <div className="card-panel">
            <Avatar size={65} src={imgSrc} className={avatarClassName}/>
            <p className="card-title">{title}</p>
            <p className="card-subtitle">{subtitle}</p>
            <RaisedButton
                label={buttonTxt}
                primary={primary}
                secondary={secondary}
                fullWidth={true}
                onTouchTap={buttonEvent}
                className="card-button"
                buttonStyle={{
                    fontSize: '12px',
                    height: '30px',
                    lineHeight: '30px'
                }}
                labelStyle={{
                    fontSize: '12px'
                }}
            />
        </div>
    );
}