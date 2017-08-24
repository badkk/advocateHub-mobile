import React from 'react'
import { List, ListItem } from 'material-ui'
import { AvVideoLibrary, ActionSpeakerNotes } from 'material-ui/svg-icons'
import { isUrl } from '../../utils/strings'
import { talkDetailClasses } from "../../styles/TalkDetailStyle"
/**
 * Created by t-zikfan on 2017/7/6.
 * About Content of Meeting page
 */
function itemGenerator(key, title, subtitle, icon, iframeLink) {
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
                    className={talkDetailClasses.resItemPanel}
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
        <List className={talkDetailClasses.contentPanel}>
            {videoItem}
            {pptItem}
        </List>
    );

}
