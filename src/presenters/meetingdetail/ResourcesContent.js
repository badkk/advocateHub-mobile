import React from 'react'
import { List, ListItem } from 'material-ui'
import { AvVideoLibrary, ActionSpeakerNotes, ActionCode } from 'material-ui/svg-icons'
import { isUrl } from '../../utils/strings'
/**
 * Created by t-zikfan on 2017/7/6.
 * About Content of Meeting page
 */
function itemGenerator(key, title, subtitle, icon, iframeLink) {
    //resize the video screen to 16:9
    const height = window.screen.width * 0.9 * 9 / 16;
    return (
        <ListItem
            key={key}
            primaryText={title}
            secondaryText={subtitle}
            initiallyOpen={true}
            leftIcon={icon}
            primaryTogglesNestedList={true}
            nestedItems={[
                <iframe
                    src={iframeLink}
                    style={{width: '90%', height: height, paddingLeft: '5%'}}
                    frameBorder={0}
                />
            ]}
        />
    );
}
export default function ResourcesContent({meeting}) {

    const {videoLink, pptLink, date, codeSample} = meeting;

    const uploadDate = "Uploaded at " + new Date(date).toString().substring(0, 10);

    const videoItem = (videoLink && isUrl(videoLink)) ? itemGenerator("video-item", 'Video', uploadDate, <AvVideoLibrary/>, videoLink) : null;
    const pptItem = (pptLink && isUrl(pptLink)) ? itemGenerator("video-item", 'PowerPoint', uploadDate, <ActionSpeakerNotes/>, pptLink) : null;
    const codeSampleItem = <div>
        <iframe height='325' scrolling='no' title='testSample' src='//codepen.io/lcsdev/embed/preview/qXRLWe/?height=300&theme-id=30811&default-tab=css,result&embed-version=2' frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{width: '100%'}}>See the Pen <a href='https://codepen.io/lcsdev/pen/NvdEZv/'>testSample</a> by lucas_f. (<a href='https://codepen.io/lcsdev'>@lcsdev</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
    </div>;
    return (
        <List style={{backgroundColor: 'white'}} className="resource-panel">
            {videoItem}
            {pptItem}
            <ListItem
                key="resource_codeSam"
                primaryText="Code Sample"
                secondaryText={uploadDate}
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
