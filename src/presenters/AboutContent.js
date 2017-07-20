import React, {Component} from 'react'
import {Card, CardHeader, CardMedia, CardTitle, CardActions, FlatButton} from 'material-ui'
import '../styles/AboutContent.css'

/**
 * Created by t-zikfan on 2017/7/6.
 * About Content of Meeting page
 */

export default class AboutContent extends Component {
    handleLearnAzureClick = () => {
      window.location = "https://azure.microsoft.com/en-us/"
    };
    render() {
        //resize the video screen to 16:9
        const height = window.screen.width * 9 / 16;
        return (
        <div style={{maxHeight: this.props.maxHeight}}>
            <Card>
                <CardHeader
                    title="Talk Video"
                    subtitle="Uploaded at 14:23 Thu 7/6/2017"
                    titleStyle={{fontSize:'20px', marginBottom:'10px'}}
                    className="card-header"
                />
                <CardMedia className="video-screen">
                    <iframe src="https://www.youtube.com/embed/rjkCjPhznvc" width='100%' height={height} frameBorder={0}/>
                </CardMedia>
                <CardTitle title="Learn more about Azure" subtitle="Using Azure to deploy Angular"/>
                <CardActions>
                    <FlatButton primary={true} label="Learn Azure" onTouchTap={this.handleLearnAzureClick}/>
                </CardActions>
            </Card>

        </div>
        );
    }
}
