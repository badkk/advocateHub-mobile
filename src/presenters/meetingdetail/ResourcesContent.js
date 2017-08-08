import React from 'react'
import { List, ListItem } from 'material-ui'
import { AvVideoLibrary, ActionSpeakerNotes, ActionCode } from 'material-ui/svg-icons'
import { isUrl } from '../../utils/strings'
/**
 * Created by t-zikfan on 2017/7/6.
 * About Content of Meeting page
 */
export default function ResourcesContent({meeting}) {

    //resize the video screen to 16:9
    const height = window.screen.width * 0.9 * 9 / 16;
    const {videoLink, pptLink, date} = meeting;

    let videoUploadDate, pptUploadDate, videoItem, pptItem;

    if (typeof videoLink !== 'undefined' && isUrl(videoLink)) {
        videoItem = <iframe
            src={videoLink}
            style={{width: '90%', height: height, paddingLeft: '5%'}}
            frameBorder={0}
        />;
        videoUploadDate = "Uploaded at " + new Date(date).toString().substring(0, 10);
    } else {
        videoItem = null;
        videoUploadDate = "User did not upload video yet"
    }
    if (typeof pptLink !== 'undefined' && isUrl(pptLink)) {
        pptItem = <iframe
            src={pptLink}
            style={{width: '90%', height: height, paddingLeft: '5%'}}
            frameBorder={0}
        />;
        pptUploadDate = "Uploaded at " + new Date(date).toString().substring(0, 10);
    } else {
        pptItem = null;
        pptUploadDate = "User did not upload ppt yet"
    }
    const codeSampleItem = <div>
        <iframe height='325' scrolling='no' title='testSample' src='//codepen.io/lcsdev/embed/preview/qXRLWe/?height=300&theme-id=30811&default-tab=css,result&embed-version=2' frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{width: '100%'}}>See the Pen <a href='https://codepen.io/lcsdev/pen/NvdEZv/'>testSample</a> by lucas_f. (<a href='https://codepen.io/lcsdev'>@lcsdev</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
    </div>;
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
            <ListItem
                primaryText="Code Sample"
                secondaryText={pptUploadDate}
                initiallyOpen={false}
                leftIcon={<ActionCode/>}
                primaryTogglesNestedList={true}
                nestedItems={[
                    codeSampleItem
                ]}
            />
        </List>
    );

}
