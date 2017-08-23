import React from 'react'
import { Card, FlatButton, CardTitle, CardActions, CardHeader} from 'material-ui'
import { ActionFavorite } from 'material-ui/svg-icons'
import { pink500 } from 'material-ui/styles/colors'
import { talkCardClasses } from "../../styles/TalkCardStyles"
/**
 * Created by t-zikunfan
 * Date: 17:27 2017/7/21
 */
export default function TalkCard({imgSrc="MSLogo.jpg",
                                     title,
                                     subtitle,
                                     date,
                                     likes,
                                     buttonEvent}){
    return (
        <Card className={talkCardClasses.cardPanel}>
            <CardHeader
                title={date}
                subtitle={
                    <div className={talkCardClasses.subtitlePanel}>
                        <ActionFavorite color={pink500}/>
                        {likes}
                    </div>
                }
                avatar={imgSrc}
                titleColor="white"
                subtitleColor="white"
                className={talkCardClasses.cardHeader}
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
                    minHeight: '80px'
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