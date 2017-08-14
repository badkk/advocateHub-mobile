import React from 'react'
import { ListItem, List, Divider, FontIcon } from 'material-ui'
import { BottomSheet } from 'material-ui-bottom-sheet';

/**
 * Created by t-zikunfan
 * Date: 14:23 2017/8/11
 */
export default function SocialMediaBtmSheet({
                                                title,
                                                isOpen,
                                                handleCancel,
                                                facebookEvent=null,
                                                twitterEvent=null,
                                                googlePlusEvent=null,
                                                linkedinEvent=null,
                                                githubEvent=null
                                            }){

    const facebookIcon = <FontIcon className="fa fa-facebook-official" color="#4267b2"/>;
    const twitterIcon = <FontIcon className="fa fa-twitter" color="#1da1f2"/>;
    const googlePlusIcon = <FontIcon className="fa fa-google-plus" color="#db4437"/>;
    const linkedinIcon = <FontIcon className="fa fa-linkedin-square" color="#1e9f75"/>;
    const githubIcon = <FontIcon className="fa fa-github" color="black"/>;

    const facebookItem = facebookEvent ? <ListItem key='facebook-item' onTouchTap={facebookEvent} primaryText="Facebook" leftIcon={facebookIcon}/> : null;
    const twitterItem = twitterEvent ? <ListItem key='twitter-item' onTouchTap={twitterEvent} primaryText="Twitter" leftIcon={twitterIcon}/> : null;
    const googlePlusItem = googlePlusEvent ? <ListItem key='googlePlus-item' onTouchTap={googlePlusEvent} primaryText="GooglePlus" leftIcon={googlePlusIcon}/> : null;
    const linkedinItem = linkedinEvent ? <ListItem key='linkedin-item' onTouchTap={linkedinEvent} primaryText="Linkedin" leftIcon={linkedinIcon}/> : null;
    const githubItem = githubEvent ? <ListItem key='github-item' onTouchTap={githubEvent} primaryText="Github" leftIcon={githubIcon}/> : null;

    const socialMediaBlock = (
        <List>
            {facebookItem}
            {twitterItem}
            {googlePlusItem}
            {linkedinItem}
            {githubItem}
        </List>

    );

    return (
        <BottomSheet
            onRequestClose={handleCancel}
            open={isOpen}
        >
            <h4 style={{color: 'dimgrey', marginLeft: '12px'}}>{title}</h4>
            <Divider/>
            {socialMediaBlock}
        </BottomSheet>
    );
}