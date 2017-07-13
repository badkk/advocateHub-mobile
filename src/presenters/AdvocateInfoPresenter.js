import React, {Component} from 'react'
import Menu from './Menu'
import {Paper, IconButton, FontIcon, CircularProgress, Avatar, ListItem, Badge, FloatingActionButton, RaisedButton, List, Divider} from 'material-ui'
import "../styles/AdvocateInfo.css"
import { BottomSheet } from 'material-ui-bottom-sheet';
import { SocialPersonAdd, ContentAddCircle, ActionCheckCircle } from 'material-ui/svg-icons'
import {grey500, green500} from 'material-ui/styles/colors'

/**
 * Created by lucas on 2017/7/4.
 * Advocate Info Presenter
 */
const iFramePanelHeight = window.screen.height * 0.8;
const appBarHeight = window.screen.height * 0.12;
class InfoBar extends Component {
    render() {
        const {unFollowCount, handleBtmSheetOpen} = this.props;
        const followedIconButton = (
            <Badge
                badgeContent={unFollowCount}
                secondary={true}
                badgeStyle={{display: unFollowCount <= 0 ? 'none' : 'flex', zIndex: 1}}
                style={{padding: 0}}>
                <RaisedButton primary={true} className="follow-button" label="Follow" onTouchTap={handleBtmSheetOpen}/>
            </Badge>
        );
        return (
            <Paper style={{maxHeight: appBarHeight}} className="advocate-info-app-bar">
                <ListItem
                    primaryText="John Papa"
                    secondaryText="Node.js, .NET, React"
                    leftAvatar={<Avatar src="johnpapa.png" />}
                    rightIconButton={followedIconButton}
                    style={{width:"100%"}}
                />
            </Paper>
        );
    }
}
class SocialMediaBtmSheet extends Component {
    render() {
        const { isOpen, followedFb, followedTt, followedGh, handleFbFollow, handleGhFollow, handleTtFollow, handleBtmSheetClose} = this.props;
        /* Bottom shared sheet */
        //icons
        const GithubIcon = <FontIcon className="fa fa-github"/>;
        const TwitterIcon = <FontIcon className="fa fa-twitter"/>;
        const FacebookIcon = <FontIcon className="fa fa-facebook-square"/>;
        //followedButton
        const followFbIcon = followedFb ? <ActionCheckCircle color={green500}/> :
            <ContentAddCircle color={grey500}/>;
        const followTtIcon = followedTt ? <ActionCheckCircle color={green500}/> :
            <ContentAddCircle color={grey500}/>;
        const followGhIcon =  followedGh ? <ActionCheckCircle color={green500}/> :
            <ContentAddCircle color={grey500}/>;
        return (
            <BottomSheet
                action={
                    <FloatingActionButton>
                        <SocialPersonAdd/>
                    </FloatingActionButton>
                }
                onRequestClose={handleBtmSheetClose}
                open={isOpen}>
                <h4 style={{color: grey500, marginLeft: '25px'}}>Follow me on these channel</h4>
                <Divider inset/>
                <List>
                    <ListItem primaryText="Facebook"
                              secondaryText="Followers: 29,1552"
                              leftIcon={FacebookIcon}
                              rightIconButton={<IconButton
                                  onTouchTap={handleFbFollow}>{followFbIcon}</IconButton>}/>
                    <ListItem primaryText="Twitter"
                              secondaryText="Followers: 59,8578"
                              leftIcon={TwitterIcon}
                              rightIconButton={<IconButton
                                  onTouchTap={handleTtFollow}>{followTtIcon}</IconButton>}/>
                    <ListItem primaryText="Github"
                              secondaryText="Followers: 7,258"
                              leftIcon={GithubIcon}
                              rightIconButton={<IconButton
                                  onTouchTap={handleGhFollow}>{followGhIcon}</IconButton>}/>
                </List>
            </BottomSheet>
        );
    }
}
class PersonalPage extends Component {
    render() {
        const {loading, handlePageLoaded} = this.props;
        return (
            <div>
                <CircularProgress
                    thickness={3}
                    style={{position: 'absolute', padding:'45%', display: loading ? "inline-block" : "none"}}
                />
                <iframe src="https://johnpapa.net/"
                        height={iFramePanelHeight}
                        width='100%'
                        frameBorder="0"
                        onLoad={handlePageLoaded}
                />
            </div>
        );
    }
}
export default class AdvocateInfoPresenter extends Component {
    render() {
        return (
            <div>
                <InfoBar unFollowCount={this.props.unFollowedCount} handleBtmSheetOpen={this.props.handleBtmSheetOpen}/>
                <PersonalPage/>
                <Menu history={ this.props.history} state={2}/>
                <SocialMediaBtmSheet
                    isOpen={this.props.isOpen}
                    handleBtmSheetClose={this.props.handleBtmSheetClose}
                    followedFb={this.props.followedFb}
                    followedTt={this.props.followedTt}
                    followedGh={this.props.followedGh}
                    handleFbFollow={this.props.handleFbFollow}
                    handleTtFollow={this.props.handleTtFollow}
                    handleGhFollow={this.props.handleGhFollow}
                />
            </div>
        );
    }
}