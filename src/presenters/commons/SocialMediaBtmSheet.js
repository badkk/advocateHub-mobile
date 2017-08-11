import React from 'react'
import { ListItem, List, Divider, FontIcon } from 'material-ui'
import { BottomSheet } from 'material-ui-bottom-sheet';

/**
 * Created by t-zikunfan
 * Date: 14:23 2017/8/11
 */
export default function SocialMediaBtmSheet({title, isOpen, handleCancel}){
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