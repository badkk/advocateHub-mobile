import React from 'react'
import {Card, CardHeader, CardTitle} from 'material-ui'
/**
 * Created by t-zikfan on 2017/7/5.
 * Meeting page Introduction Content Page
 */
export default function IntroduceContent({meeting}) {
    return (
        <Card style={{height: 'auto'}} zDepth={0} className="introduce-panel">
            <CardHeader
                title={meeting.name}
                subtitle={"Created on " + new Date(meeting.date).toString().substring(0, 10) + " by " + meeting.advocator.name}
                titleStyle={{fontSize:'20px', marginBottom:'10px'}}
                className="card-header"
            />
            <CardTitle
                subtitle={meeting.description}/>
        </Card>
    );

}
