import React from 'react'
import { List, ListItem } from 'material-ui'
import { AvVideoLibrary, ActionSpeakerNotes } from 'material-ui/svg-icons'

/**
 * Created by t-zikfan on 2017/7/6.
 * About Content of Meeting page
 */
function handleLearnAzureClick() {
    window.location = "https://azure.microsoft.com/en-us/"
}
export default function ResourcesContent({meeting}) {

    //resize the video screen to 16:9
    const height = window.screen.width * 9 / 16;
    const uploadDate = "Uploaded at " + new Date(meeting.date).toString().substring(0, 10);
    return (
        <List zDepth={0} style={{backgroundColor: 'white'}} className="resource-panel">
            <ListItem
                primaryText="Video"
                secondaryText={uploadDate}
                initiallyOpen={false}
                leftIcon={<AvVideoLibrary/>}
                primaryTogglesNestedList={true}
                nestedItems={ [
                    <iframe src="https://www.youtube.com/embed/rjkCjPhznvc" width='100%' height={height} frameBorder={0}/>
                    ]
                }
            />
            <ListItem
                primaryText="PowerPoint"
                secondaryText={uploadDate}
                initiallyOpen={false}
                leftIcon={<ActionSpeakerNotes/>}
                primaryTogglesNestedList={true}
                nestedItems={ [
                    <iframe
                        src='https://microsoft-my.sharepoint.com/personal/t-zikfan_microsoft_com/_layouts/15/WopiFrame.aspx?sourcedoc={c83dc785-18f0-49de-8856-acf070090c9c}&action=embedview&wdAr=1.7777777777777777'
                        width='100%'
                        height={height}
                        frameBorder='0'/>
                    ]
                }
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
