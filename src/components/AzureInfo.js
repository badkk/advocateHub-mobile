import React, {Component} from 'react'
import Menu from './commons/Menu'
import {AppBar, SvgIcon, Card, CardHeader, CardActions, FlatButton, CardMedia} from 'material-ui'
import "../styles/AzureInfo.css"
import dotnet from '../res/imgs/dotnet.png'
import _ from 'underscore'
import get from '../restful/Get'
/**
 * Created by t-zikfan on 2017/7/3.
 * The Azure Information Page
 */
class AzureContent extends Component {
    constructor(props) {
        super(props);
        this.handleCardActions = this.handleCardActions.bind(this);
        this.state = {
            data: this.props.data
        }
    }
    handleCardActions(e) {

    }
    render() {
        const maxHeight = window.screen.height * 0.78;
        //const cardContent = _.map(this.state.data);
        return (
            <div style={{maxHeight: maxHeight}} className="azure-content">
                <Card>
                    <CardHeader
                        title="Azure for .NET developers"
                        subtitle="5-Minute Quickstarts"
                        actAsExpander={true}/>
                    <CardMedia>
                        <img src={dotnet} alt="" />
                    </CardMedia>
                    <CardActions>
                        <FlatButton label="Learn More" primary={true}/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}
export default class AzureInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history,
            data: []
        };
        this.handleAppBarTouched = this.handleAppBarTouched.bind(this);
        this.init = this.init.bind(this);
    }
    componentDidMount() {
        this.init();
    }
    init() {
        get('/azure/info').then(res => {
            this.setState({
                data: res['data']
            })
        })
    }
    handleAppBarTouched() {
        window.location = 'https://azure.microsoft.com/en-us/';
    }
    render() {
        //ms logo
        const LogoIcon =  (props) => (
            <SvgIcon {...props} viewBox="0 0 64 64" className="icon">
                <path className="st0" d="M0 0h30v30H0z"/>
                <path className="st1" d="M34 0h30v30H34z"/>
                <path className="st2" d="M34 34h30v30H34z"/>
                <path className="st3" d="M0 34h30v30H0z"/>
            </SvgIcon>
        );
        const maxHeight = window.screen.height * 0.1;
        return (
            <div>
                <AppBar title="Learn about Azure"
                        titleStyle={{fontSize:'18px'}}
                        iconElementLeft={<LogoIcon/>}
                        className='app-header'
                        onLeftIconButtonTouchTap={this.handleAppBarTouched}
                        onTitleTouchTap={this.handleAppBarTouched}
                        style={{maxHeight:maxHeight}}
                />
                <AzureContent data={this.state.data}/>
                <Menu history={ this.state.history } state={1}/>
            </div>
        );
    }
}