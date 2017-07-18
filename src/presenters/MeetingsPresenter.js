import React, {Component} from 'react'
import {Paper, SvgIcon} from 'material-ui'
import SearchBar from 'material-ui-search-bar'
import Menu from './Menu'
import '../styles/Meetings.css'
/**
 * Created by lucas on 2017/7/18.
 * Create meetings page
 */
const headerHeight = window.screen.height * 0.12;
const bodyHeight = window.screen.height * 0.80;
export default class MeetingsPresenter extends Component {
    render() {
        //ms logo
        const LogoIcon =  (props) => (
            <SvgIcon
                {...props}
                viewBox="0 0 64 64"
                className="icon"
                style={{height: '35px', width: '35px', marginLeft: 0}}
            >
                <path className="st0" d="M0 0h30v30H0z"/>
                <path className="st1" d="M34 0h30v30H34z"/>
                <path className="st2" d="M34 34h30v30H34z"/>
                <path className="st3" d="M0 34h30v30H0z"/>
            </SvgIcon>
        );
        const meetings = [

        ];
        return (
            <div>
                <Paper zDepth={1} className="meetings-page-header" style={{height: headerHeight}}>
                    <LogoIcon />
                    <SearchBar
                        hintText="Search advocate or techs"
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                    />
                </Paper>
                <div className="meetings-page-body" style={{height: bodyHeight}}>

                </div>
                <Menu history={ this.props.history} state={0}/>
            </div>
        );
    }
}
