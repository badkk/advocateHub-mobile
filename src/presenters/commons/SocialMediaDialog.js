import React from 'react'
import { ListItem, List, FontIcon, Dialog, FlatButton } from 'material-ui'

/**
 * Created by t-zikunfan
 * Date: 14:37 2017/8/11
 */
export default function SocialMediaDialog({title, isOpen, handleCancel}) {
    const facebookIcon = <FontIcon className="fa fa-facebook-official" color="#4267b2"/>;
    const twitterIcon = <FontIcon className="fa fa-twitter" color="#1da1f2"/>;
    const googlePlusIcon = <FontIcon className="fa fa-google-plus" color="#db4437"/>;
    const socialMediaBlock = (
        <List>
            <ListItem primaryText="Facebook" leftIcon={facebookIcon}/>
            <ListItem primaryText="Twitter" leftIcon={twitterIcon}/>
            <ListItem primaryText="Google+" leftIcon={googlePlusIcon}/>
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