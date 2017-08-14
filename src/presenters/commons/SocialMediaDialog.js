import React from 'react'
import { ListItem, List, FontIcon, Dialog, FlatButton } from 'material-ui'

/**
 * Created by t-zikunfan
 * Date: 14:37 2017/8/11
 */
export default function SocialMediaDialog({
                                              title,
                                              isOpen,
                                              handleCancel,
                                              facebookEvent=null,
                                              twitterEvent=null,
                                              googlePlusEvent=null,
                                              linkedinEvent=null
                                          }){
    const facebookIcon = <FontIcon className="fa fa-facebook-official" color="#4267b2"/>;
    const twitterIcon = <FontIcon className="fa fa-twitter" color="#1da1f2"/>;
    const googlePlusIcon = <FontIcon className="fa fa-google-plus" color="#db4437"/>;
    const linkedinIcon = <FontIcon className="fa fa-linkedin-square" color="#1e9f75"/>;
    const facebookItem = facebookEvent ? <ListItem key='facebook-item' onTouchTap={facebookEvent} primaryText="Facebook" leftIcon={facebookIcon}/> : null;
    const twitterItem = twitterEvent ? <ListItem key='twitter-item' onTouchTap={twitterEvent} primaryText="Twitter" leftIcon={twitterIcon}/> : null;
    const googlePlusItem = googlePlusEvent ? <ListItem key='googlePlus-item' onTouchTap={googlePlusEvent} primaryText="GooglePlus" leftIcon={googlePlusIcon}/> : null;
    const linkedinItem = linkedinEvent ? <ListItem key='linkedin-item' onTouchTap={linkedinEvent} primaryText="Linkedin" leftIcon={linkedinIcon}/> : null;
    const socialMediaBlock = (
        <List>
            {facebookItem}
            {twitterItem}
            {googlePlusItem}
            {linkedinItem}
        </List>

    );
    /* Shared Dialog */
    const action = [
        <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={handleCancel}
            fullWidth={true}
        />,
    ];
    return (
        <Dialog
            title={title}
            actions={action}
            modal={true}
            open={isOpen}
        >
            {socialMediaBlock}
        </Dialog>
    );

}