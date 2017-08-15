import React from 'react'
import {Avatar, IconButton, FontIcon} from 'material-ui'
import {ActionFavorite, ActionFavoriteBorder} from 'material-ui/svg-icons'
import {pink500, grey500} from 'material-ui/styles/colors'
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
export default function InfoPanel({handleBtmSheetOpen, name, avatar, tags,
                                      facebookEvent, twitterEvent, githubEvent, likedNum, clickLiked, liked}) {

    const avatarPanel = (
        <div className="advocate-info-avatar-panel">
            <Avatar src={avatar} size={55}/>
            <div className="advocate-info-title-panel">
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
    const likedNumPanel = (
        <div className="advocate-info-likes-panel">
            <IconButton onTouchTap={clickLiked}>
                { liked ? <ActionFavorite color={pink500}/> : <ActionFavoriteBorder color={grey500}/> }
            </IconButton>
            <a>{(likedNum ? likedNum : 0) + ' likes'}</a>
        </div>
    );
    return (
        <div className="advocate-info-root-panel">
            {avatarPanel}
            <div className="advocate-info-sm-panel">
                {socialMediaPanel}
                {likedNumPanel}
            </div>
        </div>
    );

}