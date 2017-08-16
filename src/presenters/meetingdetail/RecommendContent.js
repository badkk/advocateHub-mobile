import React, {Component} from 'react'
import {Card, CardHeader, CardActions, FlatButton, CardMedia, CircularProgress, RaisedButton, Paper} from 'material-ui'
import _ from 'underscore'
import get from '../../restful/Get'
import {homeBarHeight} from '../commons/HomeBar'
import { getFileName } from '../../utils/strings'
/**
 * Created by t-zikfan on 2017/7/3.
 * The Azure Information Page
 */
/*Height Compatible Infos*/
//const contentMinHeight = window.screen.height - homeBarHeight - menuHeight;
function StandardCards({idx, title, subtitle, imgLink, url}) {
    return (
        <Card className="azure-content-card-style" key={idx}>
            <CardHeader
                title={title}
                subtitle={subtitle}
                actAsExpander={true}

            />
            <CardMedia>
                <img src={imgLink} alt="" />
            </CardMedia>
            <CardActions>
                <FlatButton label="Learn More" primary={true} onTouchTap={() => {window.location = url}}/>
            </CardActions>
        </Card>
    );
}
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
        const {tags, authLink} = this.props.meeting;
        const datas = this.state.data;
        let sortedData = [];
        if (tags) {
            const firstTag = tags[0];
            _.forEach(datas, data => {
                const tag = getFileName(data.imgurl);
                if (firstTag.toUpperCase() === tag.toUpperCase()) {
                    sortedData = [data, ...sortedData];
                } else {
                    sortedData.push(data);
                }
            });
        }
        console.log(sortedData);
        const authCards = authLink ? (
            <StandardCards
                idx='auth-card'
                title={authLink.title}
                subtitle={authLink.subtitle}
                imgLink={authLink.imgUrl}
                url={authLink.url}
            />
        ) : null;
        const relatedCards = _.map(sortedData, (data, index) => {
            return (
                <StandardCards
                    idx={index}
                    title={data['title']}
                    subtitle={data['subtitle']}
                    imgLink={"../" + data['imgurl']}
                    url={data['link']}
                />
            );
        });
        const speakerCard = (
            <StandardCards
                idx='azure-card'
                title="Azure Infos"
                subtitle="Speakers Related Docs"
                imgLink={"../azure.jpg"}
                url="https://docs.microsoft.com/en-us/"
            />
        );
        return (
            <div className="recommended-content-panel">
                <div>
                    <h3>Speaker Recommend</h3>
                    {authCards}
                </div>
                <div className="azure-content">
                    <h3>Related Docs</h3>
                    {relatedCards}
                </div>
                <div>
                    <h3>More Docs</h3>
                    {speakerCard}
                </div>
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
        return (
            <div className="recommended-panel">
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
                    <AzureContent data={this.state.data} meeting={this.props.meeting}/>
                </div>
                {/*<Menu history={ this.state.history } state={1} meetingId="johnpapa_123" userId="johnpapa" />*/}
            </div>
        );
    }
}