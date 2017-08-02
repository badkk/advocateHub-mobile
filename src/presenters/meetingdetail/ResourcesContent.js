import React from 'react'
import { List, ListItem } from 'material-ui'
import { AvVideoLibrary, ActionSpeakerNotes } from 'material-ui/svg-icons'

/**
 * Created by t-zikfan on 2017/7/6.
 * About Content of Meeting page
 */
export default function ResourcesContent({meeting}) {

    //resize the video screen to 16:9
    const height = window.screen.width * 0.9 * 9 / 16;
    const {videoLink, pptLink, date} = meeting;

    let videoUploadDate, pptUploadDate, videoItem, pptItem;

    if (typeof videoLink === 'undefined') {
        videoItem = null;
        videoUploadDate = "User did not upload video yet"
    } else {
        videoItem = <iframe
            src={videoLink}
            style={{width: '90%', height: height, paddingLeft: '5%'}}
            frameBorder={0}
        />;
        videoUploadDate = "Uploaded at " + new Date(date).toString().substring(0, 10);
    }
    if (typeof pptLink === 'undefined') {
        pptItem = null;
        pptUploadDate = "User did not upload ppt yet"
    } else {
        pptItem = <iframe
            src={pptLink}
            style={{width: '90%', height: height, paddingLeft: '5%'}}
            frameBorder={0}
        />;
        pptUploadDate = "Uploaded at " + new Date(date).toString().substring(0, 10);
    }
    return (
        <List style={{backgroundColor: 'white'}} className="resource-panel">
            <ListItem
                primaryText="Video"
                secondaryText={videoUploadDate}
                initiallyOpen={false}
                leftIcon={<AvVideoLibrary/>}
                primaryTogglesNestedList={true}
                nestedItems={[
                    videoItem
                ]}
            />
            <ListItem
                primaryText="PowerPoint"
                secondaryText={pptUploadDate}
                initiallyOpen={false}
                leftIcon={<ActionSpeakerNotes/>}
                primaryTogglesNestedList={true}
                nestedItems={[
                    pptItem
                ]}
            />
            {/*<CardHeader
                title="Video Resource"
                subtitle={uploadDate}
                titleStyle={{fontSize:'20px', marginBottom:'10px'}}
                className="card-header"
            />
            <CardMedia className="video-screen">
                <iframe src="https://www.youtube.com/embed/rjkCjPhznvc" width='100%' height={height} frameBorder={0}/>
            </CardMedia>
            <CardTitle title={meeting.name} subtitle={meeting.description}/>
            <CardActions>
                <FlatButton primary={true} label="Learn More" onTouchTap={handleLearnAzureClick}/>
            </CardActions>*/}
        </List>
    );

}
