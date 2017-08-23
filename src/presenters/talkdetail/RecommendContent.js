import React, {Component} from 'react'
import {Card, CardHeader, CardActions, FlatButton, CardMedia, CircularProgress, RaisedButton, Paper} from 'material-ui'
import _ from 'underscore'
import get from '../../restful/Get'
import {homeBarHeight} from '../commons/AppBar'
import { getFileName } from '../../utils/strings'
/**
 * Created by t-zikfan on 2017/7/3.
 * The Azure Information Page
 */
/*Height Compatible Infos*/
//const contentMinHeight = window.screen.height - homeBarHeight - menuHeight;
function StandardCards({title, subtitle, imgLink, url}) {
    return (
        <Card className="azure-content-card-style">
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
function DocsContent({docs, talk}){

    const {tags, authLink} = talk;
    let sortedData = [];
    if (tags) {
        const firstTag = tags[0];
        _.forEach(docs, doc => {
            const tag = getFileName(doc.imgurl);
            if (firstTag.toUpperCase() === tag.toUpperCase()) {
                sortedData = [doc, ...sortedData];
            } else {
                sortedData.push(doc);
            }
        });
    }
    const authCards = authLink ? (
        <StandardCards
            key='auth-card'
            title={authLink.title}
            subtitle={authLink.subtitle}
            imgLink={authLink.imgUrl}
            url={authLink.url}
        />
    ) : null;
    const relatedCards = _.map(sortedData, (data, index) => {
        return (
            <StandardCards
                key={index}
                title={data['title']}
                subtitle={data['subtitle']}
                imgLink={"../" + data['imgurl']}
                url={data['link']}
            />
        );
    });
    const speakerCard = (
        <StandardCards
            key='azure-card'
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
export default class RecommendContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            docs: [],
            loadRuning: true
        };
    }
    componentDidMount() {
        this.props.getDocs();
    }
    render() {
        const {docs, talk} = this.props;
        return (
            <div className="recommended-panel">
                {/*<HomeBar history={this.props.history}/>*/}
                <Paper className="app-header">
                    <RaisedButton
                        label="Try Azure free account"
                        primary={true}
                        className="free-account-button"
                        style={{height: homeBarHeight}}
                        onTouchTap={() => {window.location = "https://azure.microsoft.com/en-us/free/?v=17.15";}}
                    />
                </Paper>
                <div>
                    <CircularProgress
                        thickness={3}
                        style={{position: 'absolute', padding:'45%', display: this.state.loadRuning ? "inline-block" : "none"}}
                    />
                    <DocsContent docs={docs} talk={talk}/>
                </div>
            </div>
        );
    }
}