import React from 'react'
import Slider from 'react-slick'
import _ from 'underscore'
import {Card, CardHeader, CardMedia, CardTitle, CardActions, FlatButton} from 'material-ui'
/**
 * Created by t-zikfan on 2017/7/5.
 * Meeting page Introduction Content Page
 */
function handleLearnMoreClick() {
    window.location = "https://johnpapa.net/azure-and-angular-on-dotnetrocks/";
}
export default function IntroduceContent({meeting}) {
    /* Carousel */
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    /*  */
    return (
        <Card style={{height: 'auto'}} zDepth={0} className="introduce-panel">
            <CardHeader
                title={meeting.name}
                subtitle={new Date(meeting.date).toString().substring(0, 10) + " by " + meeting.advocator.name}
                titleStyle={{fontSize:'20px', marginBottom:'10px'}}
                className="card-header"
            />
            <CardMedia className="introduce-carousel-panel">
                <img src='../poster1.jpg'/>
            </CardMedia>
            <CardTitle
                subtitle={meeting.description}/>
            <CardActions>
                <FlatButton
                    primary={true}
                    label="Learn more"
                    onTouchTap={handleLearnMoreClick}
                />
            </CardActions>
        </Card>
    );

}
