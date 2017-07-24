import React from 'react'
import Slider from 'react-slick'
import _ from 'underscore'
import '../../styles/IntroduceContent.css'
import {Card, CardHeader, CardMedia, CardTitle, CardActions, FlatButton} from 'material-ui'
/**
 * Created by t-zikfan on 2017/7/5.
 * Meeting page Introduction Content Page
 */
function handleLearnMoreClick() {
    window.location = "https://johnpapa.net/azure-and-angular-on-dotnetrocks/";
}
export default function IntroduceContent() {
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
    const imgs = ['../poster1.jpg', '../poster2.jpg', '../poster3.jpg'];
    const content = _.map(imgs, (img) => <img src={img}/>);
    const carouselContent = (
        <Slider {...settings}>
            {content}
        </Slider>
    );
    /*  */
    return (
        <Card style={{height: 'auto'}} zDepth={0}>
            <CardHeader
                title="Deploying Angular to Azure"
                subtitle="10:30 Wed 7/5/2017 by John Papa"
                titleStyle={{fontSize:'20px', marginBottom:'10px'}}
                className="card-header"
            />
            <CardMedia className="introduce-carousel-panel">
                <img src='../poster1.jpg'/>
            </CardMedia>
            <CardTitle
                subtitle="The Angular CLI makes it easy to build a production ready Angular app. The next step is getting that app up and in the cloud."/>
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
