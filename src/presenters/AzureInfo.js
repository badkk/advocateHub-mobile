import React, {Component} from 'react'
import Menu from './Menu'
import {AppBar, SvgIcon, Card, CardHeader, CardActions, FlatButton, CardMedia, CircularProgress, RaisedButton, Paper} from 'material-ui'
import "../styles/AzureInfo.css"
import _ from 'underscore'
import get from '../restful/Get'
/**
 * Created by t-zikfan on 2017/7/3.
 * The Azure Information Page
 */
/*Height Compatible Infos*/
const appMaxHeight = window.screen.height * 0.08;
const contentMaxHeight = window.screen.height * 0.84;

class AzureContent extends Component {
    constructor(props) {
        super(props);
        this.handleCardTouchTap = this.handleCardTouchTap.bind(this);
        this.state = {
            data: this.props.data
        };
    }
    componentWillReceiveProps(nextPros) {
        this.setState({
            data: nextPros.data
        });
    }
    handleCardTouchTap(linkAddr) {
        window.location = linkAddr;
    }
    render() {
        const cardContent = _.map(this.state.data, (data) => {
            return (
            <Card className="azure-content-card-style">
                <CardHeader
                    title={data['title']}
                    subtitle={data['subtitle']}
                    actAsExpander={true}/>
                <CardMedia>
                    <img src={data['imgurl']} alt="" />
                </CardMedia>
                <CardActions>
                    <FlatButton label="Learn More" primary={true} onTouchTap={() => this.handleCardTouchTap(data['link'])}/>
                </CardActions>
            </Card>
            );
        });
        return (
            <div className="azure-content">
                {cardContent}
            </div>
        );
    }
}
export default class AzureInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history,
            data: [],
            loadRuning: true
        };
        this.handleAppBarTouched = this.handleAppBarTouched.bind(this);
        this.handleTryButtonTouched = this.handleTryButtonTouched.bind(this);
        this.init = this.init.bind(this);
    }
    componentDidMount() {
        this.init();
    }
    init() {
        get('/azure/infos').then(res => {
            this.setState({
                data: res['data'],
                loadRuning: false
            })
        })
    }
    handleAppBarTouched() {
        window.location = "https://azure.microsoft.com/en-us/";
    }
    handleTryButtonTouched() {
        window.location = "https://azure.microsoft.com/en-us/free/?v=17.15";
    }
    render() {
        //ms logo
        const LogoIcon =  (props) => (
            <SvgIcon
                {...props}
                viewBox="0 0 64 64"
                className="icon"
            >
                <path className="st0" d="M0 0h30v30H0z"/>
                <path className="st1" d="M34 0h30v30H34z"/>
                <path className="st2" d="M34 34h30v30H34z"/>
                <path className="st3" d="M0 34h30v30H0z"/>
            </SvgIcon>
        );
        return (
            <div>
                <AppBar
                    title="Learn about Azure"
                    titleStyle={{fontSize:'18px'}}
                    iconElementLeft={<LogoIcon/>}
                    className="app-header"
                    onLeftIconButtonTouchTap={this.handleAppBarTouched}
                    onTitleTouchTap={this.handleAppBarTouched}
                    style={{maxHeight: appMaxHeight}}
                />
                <Paper className="app-header">
                    <RaisedButton
                        label="Try free account"
                        primary={true}
                        className="free-account-button"
                        style={{height: appMaxHeight}}
                        onTouchTap={this.handleTryButtonTouched}
                    />
                </Paper>
                <div style={{minHeight: contentMaxHeight}}>
                    <CircularProgress
                        thickness={3}
                        style={{position: 'absolute', padding:'45%', display: this.state.loadRuning ? "inline-block" : "none"}}
                    />
                    <AzureContent data={this.state.data}/>
                </div>
                <Menu history={ this.state.history } state={1}/>
            </div>
        );
    }
}