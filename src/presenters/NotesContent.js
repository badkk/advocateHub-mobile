import React, {Component} from 'react'
import 'github-markdown-css'
import MarkdownContent from '../res/md'

const ReactMarkdown = require('react-markdown');
/**
 * Created by t-zikfan on 2017/7/6.
 */
//will add state...
export default class NotesContent extends Component {
    render() {
        const content = MarkdownContent.art1;
        return (
            <div className="content-panel" style={{maxHeight: this.props.maxHeight}}>
                <ReactMarkdown className="markdown-body" source={content} softBreak="br" sourcePos={true}/>
            </div>);
    }
}