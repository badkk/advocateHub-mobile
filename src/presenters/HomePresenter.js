import React, {Component} from 'react'
import SearchBar from 'material-ui-search-bar'
import { FontIcon,  Tab, IconButton } from 'material-ui'
import { ActionSearch, SocialShare, ContentBackspace } from 'material-ui/svg-icons'
import SwipeableViews from 'react-swipeable-views';
import ReactCSSTransitionReplace  from 'react-css-transition-replace';

import ContentTab from "./commons/ContentTab";
import HomeAdvocateInfoPresenter from './home/HomeAdvocateInfoPresenter'
import HomeMeetingInfoPresenter from './home/HomeMeetingInfoPresenter'
import MSLogo from './commons/MSLogo'
import SocialMediaBtmSheet from './commons/SocialMediaBtmSheet'
import '../styles/Home.css'
import { homeClasses } from '../styles/HomeStyles'
/**
 * Created by lucas on 2017/7/16.
 * The Home page.
 */
const appBarHeight = 70;
function HomeContent({slideIdx, history, handleTabClick, advocates, topAdvocates, advocatesWithTags, talks, upcomingTalks}) {
    //swipeable contents
    const contents = [
        <HomeAdvocateInfoPresenter
            key={0}
            history={history}
            advocates={advocates}
            topAdvocates={topAdvocates}
            advocatesWithTags={advocatesWithTags}
        />,
        <HomeMeetingInfoPresenter
            key={1}
            history={history}
            talks={talks}
            upcomingTalks={upcomingTalks}
        />
    ];
    return (
        <SwipeableViews
            index={slideIdx}
            onChangeIndex={handleTabClick}
            disabled={true}
        >
            { contents }
        </SwipeableViews>
    );
}
class HomeHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isSearchBarShow: false
        };
        this.handleSearchBarToggle = this.handleSearchBarToggle.bind(this);
    }
    handleSearchBarToggle() {
        const status = this.state.isSearchBarShow;
        this.setState({
            isSearchBarShow: !status
        });
    }
    render() {
        const { handleSharedToggle, slideIdx, handleTabClick } = this.props;
        //social media icons(web icons)
        const facebookIcon = <IconButton><FontIcon className="fa fa-facebook-official" color="white"/></IconButton>;
        const twitterIcon = <IconButton><FontIcon className="fa fa-twitter" color="white"/></IconButton>;
        const googlePlusIcon = <IconButton><FontIcon className="fa fa-google-plus" color="white"/></IconButton>;
        //mobile show icons
        const searchButton = <IconButton onTouchTap={this.handleSearchBarToggle}><ActionSearch color="white"/></IconButton>;
        const socialMediaButton = <IconButton onTouchTap={handleSharedToggle}><SocialShare color="white"/></IconButton>;

        const smBoxWeb = (
            <div className={homeClasses.socialMediaPanel}>
                {facebookIcon}
                {twitterIcon}
                {googlePlusIcon}
            </div>
        );
        const smBoxMobile = (
            <div className={homeClasses.socialMediaPanel}>
                {searchButton}
                {socialMediaButton}
            </div>
        );

        //tabs
        const tabs = [
            <Tab label='Advocates' value={0} key={0} buttonStyle={{color: 'white'}}/>,
            <Tab label='Talks' value={1} key={1} buttonStyle={{color: 'white'}}/>,
        ];
        //common widgets
        const logoDiv = (
            <div className={homeClasses.logoPanel}>
                <MSLogo size="35"/>
                <p className={homeClasses.logoTitle}>Advocate Hub</p>
            </div>
        );
        //web bar
        const webHeader = (
            <div className={homeClasses.appPanel}>
                { logoDiv }
                <SearchBar
                    hintText="Search advocate or talks"
                    onChange={() => {}}
                    onRequestSearch={() => {}}
                    style={{width: '45%'}}
                />
                {smBoxWeb}
            </div>
        );
        //mobile bar
        const mobileHeaderLogoPanel = this.state.isSearchBarShow ?
            <div className={homeClasses.searchBar} key="search-bar">
                <IconButton onTouchTap={this.handleSearchBarToggle} style={{padding: '12px 12px 12px 0'}}>
                    <FontIcon ><ContentBackspace color='white'/></FontIcon>
                </IconButton>
                <SearchBar
                    hintText="Search advocate or talks"
                    onChange={() => {}}
                    onRequestSearch={() => {}}
                    style={{width: '100%'}}
                />
            </div>
            :
            <div className={homeClasses.appPanel} key="logo-bar">
                { logoDiv }
                {smBoxMobile}
            </div>;
        const mobileHeader = (
            <ReactCSSTransitionReplace
                style={{width:'100%', minHeight: appBarHeight}}
                transitionName="mobile-home-bar"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                {mobileHeaderLogoPanel}
            </ReactCSSTransitionReplace>
        );
        return (
            <div className={homeClasses.appHeader}>
                { window.screen.width > 800 ? webHeader : mobileHeader }
                <ContentTab tabs={tabs}
                            tabChangeHandler={handleTabClick}
                            slideIdx={slideIdx}
                            homeTab={true}
                />
            </div>
        );

    }

}
export default class HomePresenter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            slideIdx: 0,
            isOpen: false
        };
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleSharedToggle = this.handleSharedToggle.bind(this);
    }
    componentDidMount() {
        this.props.initAdvos();
        this.props.initTalks();
    }
    handleTabClick(value) {
        this.setState({
            slideIdx: value
        });
    }
    handleSharedToggle () {
        const status = this.state.isOpen;
        this.setState({
            isOpen: !status
        });
    }
    render() {
        const sharedBtmSheet = (
            <SocialMediaBtmSheet
                title="Share us !"
                isOpen={this.state.isOpen}
                handleCancel={this.handleSharedToggle}
                facebookEvent={() => {}}
                twitterEvent={() => {}}
                googlePlusEvent={() => {}}
            />
        );
        return (
            <div>
                <HomeHeader slideIdx={this.state.slideIdx} handleTabClick={this.handleTabClick}  handleSharedToggle={this.handleSharedToggle} />
                <HomeContent
                    slideIdx={this.state.slideIdx}
                    handleTabClick={this.handleTabClick}
                    history={this.props.history}
                    talks={this.props.talks}
                    upcomingTalks={this.props.upcomingTalks}
                    advocates={this.props.advocates}
                    topAdvocates={this.props.topAdvocates}
                    advocatesWithTags={this.props.advocatesWithTags}
                />
                {sharedBtmSheet}
            </div>
        );
    }
}
