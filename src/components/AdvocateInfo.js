import React, {Component} from 'react'
import Menu from './commons/Menu'
import {Paper, IconButton, FontIcon, CircularProgress, Avatar, ListItem, Badge, FloatingActionButton, RaisedButton, List, Divider} from 'material-ui'
import "../styles/AdvocateInfo.css"
import { BottomSheet } from 'material-ui-bottom-sheet';
import { SocialPersonAdd, ContentAddCircle, ActionCheckCircle } from 'material-ui/svg-icons'
import {grey500, green500} from 'material-ui/styles/colors'

/**
 * Created by lucas on 2017/7/4.
 * Advocate Info Page
 */
class AdvocateInfoBar extends Component{
    constructor(props) {
        super(props);
        this.state={
            open: false,
            isOpen: false,
            followedFb: false,
            followedTt: false,
            followedGh: false,
            unFollowedCount: 3
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleBSPopout = this.handleBSPopout.bind(this);
        this.handleFbFollow = this.handleFbFollow.bind(this);
        this.handleGhFollow = this.handleGhFollow.bind(this);
        this.handleTtFollow = this.handleTtFollow.bind(this);
        this.unfollowedCountChange = this.unfollowedCountChange.bind(this);
    }
    handleMenuClick(e, item) {
        const itemName = item.key === '0' ? "Twitter" : item.key === '1' ? "Github" : "Facebook";
        console.log(itemName);
        this.setState({
            open: true
        })
    }
    handleBSPopout() {
        this.setState({
            isOpen: true
        })
    }
    handleFbFollow() {
        this.setState({
            followedFb: !this.state.followedFb
        });
        this.unfollowedCountChange(this.state.followedFb);
    }
    handleTtFollow() {
        this.setState({
            followedTt: !this.state.followedTt
        });
        this.unfollowedCountChange(this.state.followedTt);
    }
    handleGhFollow() {
        this.setState({
            followedGh: !this.state.followedGh
        });
        this.unfollowedCountChange(this.state.followedGh);
    }
    unfollowedCountChange(flag)  {
      this.setState({
          unFollowedCount: flag ? ++ this.state.unFollowedCount : -- this.state.unFollowedCount
      })
    }
    render() {
        const iconButtonElement = (
            <Badge
                badgeContent={this.state.unFollowedCount}
                secondary={true}
                badgeStyle={{display: this.state.unFollowedCount <= 0 ? 'none' : 'flex', zIndex: 1}}
                style={{padding: 0}}>
                <RaisedButton primary={true} className="follow-button" label="Follow" onTouchTap={this.handleBSPopout}/>
            </Badge>
        );
        const GithubIcon = <FontIcon className="fa fa-github"/>;
        const TwitterIcon = <FontIcon className="fa fa-twitter"/>;
        const FacebookIcon = <FontIcon className="fa fa-facebook-square"/>;
        const height = window.screen.height * 0.12;
        /* Bottom shared sheet */
        const followFbIcon = this.state.followedFb ? <ActionCheckCircle color={green500}/> : <ContentAddCircle color={grey500}/>;
        const followTtIcon = this.state.followedTt ? <ActionCheckCircle color={green500}/> : <ContentAddCircle color={grey500}/>;
        const followGhIcon = this.state.followedGh ? <ActionCheckCircle color={green500}/> : <ContentAddCircle color={grey500}/>;

        const sharedBottomSheet = <div>
            <BottomSheet
                action={
                    <FloatingActionButton>
                        <SocialPersonAdd/>
                    </FloatingActionButton>
                }
                onRequestClose={() => this.setState({isOpen: false})}
                open={this.state.isOpen}>
                <h4 style={{color: grey500, marginLeft: '25px'}}>Follow me on these channel</h4>
                <Divider inset/>
                <List>
                    <ListItem primaryText="Facebook"
                              secondaryText="Followers: 29,1552"
                              leftIcon={FacebookIcon}
                              rightIconButton={<IconButton onTouchTap={this.handleFbFollow}>{followFbIcon}</IconButton>}/>
                    <ListItem primaryText="Twitter"
                              secondaryText="Followers: 59,8578"
                              leftIcon={TwitterIcon}
                              rightIconButton={<IconButton onTouchTap={this.handleTtFollow}>{followTtIcon}</IconButton>}/>
                    <ListItem primaryText="Github"
                              secondaryText="Followers: 7,258"
                              leftIcon={GithubIcon}
                              rightIconButton={<IconButton onTouchTap={this.handleGhFollow}>{followGhIcon}</IconButton>}/>
                </List>
            </BottomSheet>
        </div>;
        return (
            <Paper style={{maxHeight: height}}>

                <ListItem
                    primaryText="John Papa"
                    secondaryText="Node.js, .NET, React"
                    leftAvatar={<Avatar src="johnpapa.png" />}
                    rightIconButton={iconButtonElement}
                    style={{width:"100%"}}
                />
                {sharedBottomSheet}
            </Paper>
        );
    }
}
export default class AdvocateInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history,
            loaderRunning: true
        };
        this.handleiFrameLoaded = this.handleiFrameLoaded.bind(this);
    }
    handleiFrameLoaded() {
        this.setState({
            loaderRunning: false
        });
    }
    render() {
        const iFramePanelHeight = window.screen.height * 0.8;
        return (
            <div>
                <AdvocateInfoBar />
                <CircularProgress thickness={3} style={{position: 'absolute', padding:'45%', display: this.state.loaderRunning ? "inline-block" : "none"}}/>
                <iframe src="https://johnpapa.net/" height={iFramePanelHeight} width='100%' frameBorder="0" onLoad={this.handleiFrameLoaded}/>
                <Menu history={ this.state.history} state={2}/>
            </div>
        );
    }
}
