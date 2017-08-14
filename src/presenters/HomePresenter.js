import React, {Component} from 'react'
import SearchBar from 'material-ui-search-bar'
import { FontIcon, SvgIcon,  Tab, IconButton} from 'material-ui'
import { ActionSearch, SocialShare, ContentBackspace } from 'material-ui/svg-icons'
import SwipeableViews from 'react-swipeable-views';
import '../styles/Home.css'
import AHTab, {tabMenuHeight} from "./commons/AHTab";
import HomeAdvocateInfoPresenter from './home/HomeAdvocateInfoPresenter'
import HomeMeetingInfoPresenter from './home/HomeMeetingInfoPresenter'
import MSLogo from './commons/MSLogo'
import SocialMediaBtmSheet from './commons/SocialMediaBtmSheet'
import ReactCSSTransitionReplace  from 'react-css-transition-replace';
/**
 * Created by lucas on 2017/7/16.
 * The Home page.
 */
const appBarHeight = 70;
const panelHeight = window.screen.height - tabMenuHeight - appBarHeight - 10;
export default class HomePresenter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            slideIdx: 0,
            isOpen: false,
            isSearchBarShow: false
        };
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleSharedOpen = this.handleSharedOpen.bind(this);
        this.handleSharedCancel = this.handleSharedCancel.bind(this);
        this.handleSearchBarShow = this.handleSearchBarShow.bind(this);
        this.handleSearchBarDisappear = this.handleSearchBarDisappear.bind(this);
    }
    handleSharedOpen () {
        this.setState({
            isOpen: true
        });
    }
    handleSharedCancel() {
        this.setState({
            isOpen: false
        });
    }
    handleTabClick(value) {
        this.setState({
            slideIdx: value
        });
    }
    handleSearchBarShow() {
        this.setState({
            isSearchBarShow: true
        });
    }
    handleSearchBarDisappear() {
        this.setState({
            isSearchBarShow: false
        });
    }
    render() {
        //social media icon box
        const facebookIcon = <IconButton><FontIcon className="fa fa-facebook-official" color="white"/></IconButton>;
        const twitterIcon = <IconButton><FontIcon className="fa fa-twitter" color="white"/></IconButton>;
        const googlePlusIcon = <IconButton><FontIcon className="fa fa-google-plus" color="white"/></IconButton>;
        const searchButton = <IconButton onTouchTap={this.handleSearchBarShow} ><ActionSearch color="white"/></IconButton>;
        const socialMediaButton = <IconButton onTouchTap={this.handleSharedOpen}><SocialShare color="white"/></IconButton>;
        const smBox = (
            <div className="home-social-media-box">
                {facebookIcon}
                {twitterIcon}
                {googlePlusIcon}
            </div>
        );
        const smBoxMobile = (
            <div className="home-social-media-box">
                {searchButton}
                {socialMediaButton}
            </div>
        );
        const sharedBtmSheet = (
            <SocialMediaBtmSheet
                title="Share us !"
                isOpen={this.state.isOpen}
                handleCancel={this.handleSharedCancel}
                facebookEvent={() => {}}
                twitterEvent={() => {}}
                googlePlusEvent={() => {}}
            />
        );
        //tabs
        const tabs = [
            <Tab label='Advocates' value={0} key={0} buttonStyle={{color: 'white'}}/>,
            <Tab label='Talks' value={1} key={1} buttonStyle={{color: 'white'}}/>,
        ];
        //swipeable contents
        const contents = [
            <HomeAdvocateInfoPresenter key={0} history={this.props.history}/>,
            <HomeMeetingInfoPresenter  key={1} history={this.props.history}/>
        ];
        const content = (
            <SwipeableViews
                index={this.state.slideIdx}
                onChangeIndex={this.handleTabClick}
                disabled={true}
            >
                { contents }
            </SwipeableViews>
        );
        const webHeader = (
            <div className="home-app-header">
                <div className="home-logo-panel">
                    <div className="home-logo-div">
                        <MSLogo size="35"/>
                        <p className="home-title">Advocate Hub</p>
                    </div>
                    <SearchBar
                        hintText="Search advocate or talks"
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                        style={{width: '45%'}}
                    />
                    {smBox}
                </div>
                <AHTab tabs={tabs}
                       tabChangeHandler={this.handleTabClick}
                       slideIdx={this.slideIdx}
                       homeTab={true}
                />
            </div>
        );
        const mobileHeaderLogoPanel = this.state.isSearchBarShow ?
            <div className="home-mobile-search-bar" key="search-bar">
                <IconButton onTouchTap={this.handleSearchBarDisappear} style={{padding: '12px 12px 12px 0'}}>
                    <FontIcon ><ContentBackspace color='white'/></FontIcon>
                </IconButton>
                <SearchBar
                    hintText="Search advocate or talks"
                    onChange={() => console.log('onChange')}
                    onRequestSearch={() => console.log('onRequestSearch')}
                    style={{width: '100%'}}
                />
            </div>
            :
            <div className="home-logo-panel" key="logo-bar">
                <div className="home-logo-div">
                    <MSLogo size="35"/>
                    <p className="home-title">Advocate Hub</p>
                </div>
                {smBoxMobile}
            </div>;
        const mobileHeader = (
            <div className="home-app-header">
                <ReactCSSTransitionReplace
                    style={{width:'100%', minHeight: appBarHeight}}
                    transitionName="mobile-home-bar"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {mobileHeaderLogoPanel}
                </ReactCSSTransitionReplace>
                <AHTab tabs={tabs}
                       tabChangeHandler={this.handleTabClick}
                       slideIdx={this.slideIdx}
                       homeTab={true}
                />
            </div>
        );
        return (
            <div className="home-background-div">
                { window.screen.width > 800 ? webHeader : mobileHeader }
                {content}
                {sharedBtmSheet}
            </div>
        );
    }
}
