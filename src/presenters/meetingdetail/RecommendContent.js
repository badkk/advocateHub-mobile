import React, {Component} from 'react'
import Menu, {menuHeight} from '../commons/Menu'
import {SvgIcon, Card, CardHeader, CardActions, FlatButton, CardMedia, CircularProgress, RaisedButton, Paper} from 'material-ui'
import _ from 'underscore'
import "../../styles/AzureInfo.css"
import get from '../../restful/Get'
import HomeBar, {homeBarHeight} from '../commons/HomeBar'
/**
 * Created by t-zikfan on 2017/7/3.
 * The Azure Information Page
 */
/*Height Compatible Infos*/
//const contentMinHeight = window.screen.height - homeBarHeight - menuHeight;

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
        const cardContent = _.map(this.state.data, (data, index) => {
            return (
            <Card className="azure-content-card-style" key={index}>
                <CardHeader
                    title={data['title']}
                    subtitle={data['subtitle']}
                    actAsExpander={true}/>
                <CardMedia>
                    <img src={"../" + data['imgurl']} alt="" />
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
export default class RecommendContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        /*//ms logo
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
        );*/
        return (
            <div>
                {/*<HomeBar history={this.props.history}/>*/}
                <Paper className="app-header">
                    <RaisedButton
                        label="Try Azure free account"
                        primary={true}
                        className="free-account-button"
                        style={{height: homeBarHeight}}
                        onTouchTap={this.handleTryButtonTouched}
                    />
                </Paper>
                <div>
                    <CircularProgress
                        thickness={3}
                        style={{position: 'absolute', padding:'45%', display: this.state.loadRuning ? "inline-block" : "none"}}
                    />
                    <AzureContent data={this.state.data}/>
                </div>
                {/*<Menu history={ this.state.history } state={1} meetingId="johnpapa_123" userId="johnpapa" />*/}
            </div>
        );
    }
}