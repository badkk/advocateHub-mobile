import React from 'react'
import '../../styles/MeetingCard.css'
import { Card, FlatButton, CardTitle, CardActions, CardHeader} from 'material-ui'
import { ActionFavorite } from 'material-ui/svg-icons'
import { pink500 } from 'material-ui/styles/colors'
/**
 * Created by t-zikunfan
 * Date: 17:27 2017/7/21
 */
export default function TalkCard({
    imgSrc="MSLogo.jpg",
    title,
    subtitle,
    date,
    likes,
    buttonEvent}){
    return (
        <Card className="card-panel">
            <CardHeader
                title={date}
                subtitle={
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <ActionFavorite color={pink500}/>
                        {likes}
                    </div>
                }
                avatar={imgSrc}
                titleColor="white"
                subtitleColor="white"
                style={{
                    animation: 'Home-bar-transition infinite 120s linear',
                    borderRadius: '3px 3px 0 0'
                }}
            />
            <CardTitle
                title={title}
                subtitle={subtitle}
                titleStyle={{
                    fontSize: '18px',
                    lineHeight: '30px',
                    maxHeight: '60px',
                    overflow: 'hidden'
                }}
                subtitleStyle={{
                    fontSize: '14px'
                }}
                style={{
                    height: '80px'
                }}
            />
            <CardActions>
                <FlatButton
                    label='Learn more'
                    primary={true}
                    onTouchTap={buttonEvent}
                    labelStyle={{
                        fontSize: '12px',
                    }}
                />
            </CardActions>

        </Card>
    );
}