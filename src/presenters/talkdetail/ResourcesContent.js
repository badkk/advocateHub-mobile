import React from 'react'
import { List, ListItem } from 'material-ui'
import { AvVideoLibrary, ActionSpeakerNotes } from 'material-ui/svg-icons'
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
            initiallyOpen={false}
            leftIcon={icon}
            primaryTogglesNestedList={true}
            nestedItems={[
                <iframe
                    src={iframeLink}
                    key={key+'iframe'}
                    style={{width: '90%', height: height, paddingLeft: '5%'}}
                    frameBorder={0}
                />
            ]}
        />
    );
}
export default function ResourcesContent({talk}) {

    const {videoLink, pptLink, date, codeSample} = talk;

    const uploadDate = "Uploaded at " + new Date(date).toString().substring(0, 10);

    const videoItem = (videoLink && isUrl(videoLink)) ? itemGenerator("video-item", 'Video', uploadDate, <AvVideoLibrary/>, videoLink) : null;
    const pptItem = (pptLink && isUrl(pptLink)) ? itemGenerator("ppt-item", 'PowerPoint', uploadDate, <ActionSpeakerNotes/>, pptLink) : null;
    return (
        <List style={{backgroundColor: 'white'}} className="resource-panel">
            {videoItem}
            {pptItem}
        </List>
    );

}
