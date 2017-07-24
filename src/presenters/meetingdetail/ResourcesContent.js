import React from 'react'
import {Card, CardHeader, CardMedia, CardTitle, CardActions, FlatButton} from 'material-ui'
import '../../styles/AboutContent.css'

/**
 * Created by t-zikfan on 2017/7/6.
 * About Content of Meeting page
 */
function handleLearnAzureClick() {
    window.location = "https://azure.microsoft.com/en-us/"
}
export default function ResourcesContent() {

    //resize the video screen to 16:9
    const height = window.screen.width * 9 / 16;
    return (
        <Card zDepth={0}>
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
                <FlatButton primary={true} label="Learn Azure" onTouchTap={handleLearnAzureClick}/>
            </CardActions>
        </Card>
    );
}
