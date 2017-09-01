import React, {Component} from 'react'
import {Card, CardHeader, CardActions, FlatButton, CardMedia, CircularProgress, RaisedButton, Paper} from 'material-ui'
import _ from 'underscore'
import { getFileName } from '../../utils/strings'
import {talkDetailClasses} from "../../styles/TalkDetailStyle"
import {theme} from "../../styles/DefaultTheme";
/**
 * Created by t-zikfan on 2017/7/3.
 * The Azure Information Page
 */
/*Height Compatible Infos*/
function DocCard({title, subtitle, imgLink, url}) {
    return (
        <Card className={talkDetailClasses.recCardPanel}>
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
    } else {
        sortedData = docs;
    }
    const relatedCards = _.map(sortedData, (data, index) => {
        return (
            <DocCard
                key={index}
                title={data['title']}
                subtitle={data['subtitle']}
                imgLink={"../" + data['imgurl']}
                url={data['link']}
            />
        );
    });
    const speakerCard = (
        <DocCard
            key='azure-card'
            title="Azure Infos"
            subtitle="Speakers Related Docs"
            imgLink={"../azure.jpg"}
            url="https://docs.microsoft.com/en-us/"
        />
    );
    const authCards = authLink ? (
        <DocCard
            key='auth-card'
            title={authLink.title}
            subtitle={authLink.subtitle}
            imgLink={authLink.imgUrl}
            url={authLink.url}
        />
    ) : speakerCard;
    return (
        <div className={talkDetailClasses.recContentPanel}>
            <div className={talkDetailClasses.recSubContentPanel}>
                <h3>Speaker Recommend</h3>
                {authCards}
            </div>
            <div className={talkDetailClasses.recSubContentPanel}>
                <h3>Related Docs</h3>
                {relatedCards}
            </div>
            <div className={talkDetailClasses.recSubContentPanel}>
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
    componentWillReceiveProps(newProps) {
        if (newProps.docs) {
            this.setState({
                loadRuning: false
            });
        }
    }
    render() {
        const {docs, talk} = this.props;
        return (
            <div className={talkDetailClasses.contentPanel}>
                {/*<HomeBar history={this.props.history}/>*/}
                <RaisedButton
                    label="Try Azure free account"
                    backgroundColor={theme.color.msGreen}
                    labelColor="white"
                    fullWidth={true}
                    buttonStyle={{
                        height: theme.height.appBarHeight
                    }}
                    labelStyle={{
                        fontSize: theme.fontSize.mediumX
                    }}
                    onTouchTap={() => {window.location = "https://azure.microsoft.com/en-us/free/?v=17.15";}}
                />
                <div>
                    <CircularProgress
                        thickness={3}
                        style={{position: 'absolute', padding:'38%', display: this.state.loadRuning ? "inline-block" : "none"}}
                    />
                    <DocsContent docs={docs} talk={talk}/>
                </div>
            </div>
        );
    }
}
