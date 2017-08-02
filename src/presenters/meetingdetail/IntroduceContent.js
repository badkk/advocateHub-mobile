import React from 'react'
import {Card, CardHeader, CardTitle} from 'material-ui'
import {CommunicationLocationOn, ActionAlarm} from 'material-ui/svg-icons'
/**
 * Created by t-zikfan on 2017/7/5.
 * Meeting page Introduction Content Page
 */
export default function IntroduceContent({meeting}) {
    return (
        <Card style={{height: 'auto'}} zDepth={0} className="introduce-panel">
            <CardHeader
                title={meeting.name}
                titleStyle={{fontSize:'20px', marginBottom:'10px'}}
                className="card-header"
            />
            <div className="meeting-introduction-icon-panel"><ActionAlarm/> {new Date(meeting.date).toLocaleString()}</div>
            <div className="meeting-introduction-icon-panel"><CommunicationLocationOn/> {meeting.location}</div>
            <div
                style={{
                    margin: '20px 0 10px 16px',
                    fontSize: '17px',
                    color: 'dimgrey'
                }}
            > Summary </div>
            <hr />
            <CardTitle
                subtitle={meeting.description}/>
        </Card>
    );

}
