import React, {Component} from 'react'
import 'github-markdown-css'
import MarkdownContent from '../res/md'

const ReactMarkdown = require('react-markdown');
/**
 * Created by t-zikfan on 2017/7/6.
 */

export default class NotesContent extends Component {
    render() {
        const content = MarkdownContent.art1;
        return (
            <div className="content-panel">
                <ReactMarkdown className="markdown-body" source={content} softBreak="br" sourcePos={true}/>
            </div>);
    }
}
