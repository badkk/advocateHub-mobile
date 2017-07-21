import React from 'react'
import 'github-markdown-css'
import MarkdownContent from '../../res/md'
import '../../styles/NotesContent.css'

const ReactMarkdown = require('react-markdown');
/**
 * Created by t-zikfan on 2017/7/6.
 */
//will add state...
export default function NotesContent() {
    const content = MarkdownContent.art1;
    return (
        <div className="content-panel">
            <ReactMarkdown className="markdown-body" source={content} softBreak="br" sourcePos={true}/>
        </div>);
}
