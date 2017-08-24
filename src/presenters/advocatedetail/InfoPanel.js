import React from 'react'
import {Avatar, IconButton, FontIcon} from 'material-ui'
import {ActionFavorite, ActionFavoriteBorder} from 'material-ui/svg-icons'
import {pink500, grey500} from 'material-ui/styles/colors'
import {advocateInfoClasses} from "../../styles/AdvocateInfoStyles";
/**
 * Created by t-zikunfan
 * Date: 17:08 2017/8/14
 */
function socialMediaBtn(event, clsName, style) {
    if (event) {
        return <IconButton onTouchTap={event}><FontIcon className={clsName} color={style}/></IconButton>;
    } else {
        return null;
    }
}
export default function InfoPanel({name, avatar, tags, facebookEvent, twitterEvent, githubEvent}) {

    const avatarPanel = (
        <div className={advocateInfoClasses.avatarPanel}>
            <Avatar src={avatar} size={55} className={advocateInfoClasses.avatar}/>
            <div className={advocateInfoClasses.avatarTitlePanel}>
                <h2 style={{margin: '0'}}>Hi I'm {name}</h2>
                <a>{tags ? tags : 'Others'}</a>
            </div>
        </div>
    );

    /* Social Media panels */
    const facebookIcon = socialMediaBtn(facebookEvent, "fa fa-facebook-official", "#4267b2");
    const twitterIcon = socialMediaBtn(twitterEvent, "fa fa-twitter", "#1da1f2");
    const githubIcon = socialMediaBtn(githubEvent, "fa fa-github", "black");
    const socialMediaPanel = (
        <div>
            {facebookIcon}
            {twitterIcon}
            {githubIcon}
        </div>
    );
    return (
        <div className={advocateInfoClasses.generalInfoPanel}>
            {avatarPanel}
            <div className={advocateInfoClasses.socialMediaPanel}>
                {socialMediaPanel}
            </div>
        </div>
    );

}