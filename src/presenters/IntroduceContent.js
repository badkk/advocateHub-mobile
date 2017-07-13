import React, {Component} from 'react'
import Slider from 'react-slick'
import _ from 'underscore'
import '../styles/IntroduceContent.css'
import {Card, CardHeader, CardMedia, CardText, CardTitle, CardActions, FlatButton} from 'material-ui'
/**
 * Created by t-zikfan on 2017/7/5.
 * Meeting page Introduction Content Page
 */
export default class IntroduceContent extends Component {
    handleLearnMoreClick = () => {
      window.location = "https://johnpapa.net/azure-and-angular-on-dotnetrocks/";
    };
    render() {
        /* Carousel */
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        const imgs = ['poster1.jpg', 'poster2.jpg', 'poster3.jpg'];
        const content = _.map(imgs, (img, idx) => {
            return (
                <div>
                    <img src={img} style={{height: {imgHeight}}}/>
                    <div className='introduce-carousel-text-panel'>
                        <span style={{margin:0, fontSize: '15px', fontWeight: 'bold'}}>Deploying Angular to Azure {idx}</span>
                        <br/>
                    </div>
                </div>
            );
        });
        const imgHeight = 100;
        const carouselContent = (
            <div className="introduce-carousel-panel">
                <Slider {...settings}>
                    {content}
                </Slider>
            </div>
        );
        /*  */
        return (
            <div style={{height:'100%', maxHeight:this.props.maxHeight}}>
                <Card>
                    <CardHeader
                        title="Deploying Angular to Azure"
                        subtitle="10:30 Wed 7/5/2017 by John Papa"
                        titleStyle={{fontSize:'20px', fontWeight:'bold', marginBottom:'10px'}}
                        className="card-header"
                    />
                    <CardMedia>
                        {carouselContent}
                    </CardMedia>
                    <CardTitle title="Quick learn" subtitle=""/>
                    <CardText>
                        The Angular CLI makes it easy to build a production ready Angular app. The next step is getting that app up and in the cloud. This is where a CI process helps take that code from Github, build it properly, and the deploy it to Azure. I outlined the detailed steps below if you want to try this for yourself.
                    </CardText>
                    <CardActions>
                        <FlatButton
                            primary={true}
                            label="Learn more"
                            onTouchTap={this.handleLearnMoreClick}
                        />
                    </CardActions>
                </Card>

            </div>
        );
    }
}
