import React, {Component} from 'react'
import SearchBar from 'material-ui-search-bar'
import { Paper, SvgIcon,  Tab} from 'material-ui'
import SwipeableViews from 'react-swipeable-views';
import '../styles/Home.css'
import AHTab from "./commons/AHTab";
import HomeAdvocateInfoPresenter from './home/HomeAdvocateInfoPresenter'
import HomeMeetingInfoPresenter from './home/HomeMeetingInfoPresenter'
import MSLogo from './commons/MSLogo'
/**
 * Created by lucas on 2017/7/16.
 * The Home page.
 */
const appBarHeight = 140;
const bodyHeight = window.screen.height * 0.8;
class TabContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIdx: this.props.index
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }
    handleTabClick(value) {
        this.setState({
            slideIdx: value
        });
    }

    render() {
        const { contents } = this.props;
        const tabs = [
            <Tab label='Advocates' value={0} key={0} />,
            <Tab label='Meetings' value={1} key={1} />,
        ];
        return (
        <div>
            <AHTab tabs={tabs}
                   tabChangeHandler={this.handleTabClick}
                   slideIdx={this.state.slideIdx}
                   stickyHeight={appBarHeight}
            />
            <SwipeableViews
                index={this.state.slideIdx}
                onChangeIndex={this.handleTabClick}
                disabled={true}
            >
                { contents }
            </SwipeableViews>
        </div>
        );
    }
}
export default class HomePresenter extends Component{
    render() {
        //ms logo
        const contents = [
            <HomeAdvocateInfoPresenter key={0} bodyHeight={bodyHeight} history={this.props.history}/>,
            <HomeMeetingInfoPresenter  key={1} bodyHeight={bodyHeight} history={this.props.history}/>
        ];
        //url dealings
        console.log(this.props.match.params);
        const tag = this.props.match.params.tag;
        let idx = 0;
        switch (tag) {
            case 'advocates':
                idx = 0;
                break;
            case 'meetings':
                idx = 1;
                break;
            default:
                //using advocate
        }
        return (
            <div className="home-background-div">
                <div style={{height: appBarHeight}} className="home-app-header">
                    <div className="home-logo-div">
                        <MSLogo size="35"/>
                        <div>
                            <p className="home-title">Advocate Hub</p>
                            <p className="home-subtitle">Find the coolest tech stuff here</p>
                        </div>
                    </div>
                    <SearchBar
                        hintText="Search advocate or meeting"
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                    />
                </div>
                <TabContent contents={contents} index={idx}/>
               {/* <Menu history={ this.props.history} state={2}/>*/}
            </div>
        );
    }
}
