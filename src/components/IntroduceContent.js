import React, {Component} from 'react'
import Slider from 'react-slick'
import _ from 'underscore'
import '../styles/IntroduceContent.css'
/**
 * Created by t-zikfan on 2017/7/5.
 * Meeting page Introduction Content Page
 */
export default class IntroduceContent extends Component {
    render() {
        /* Carousel */
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        const imgs = ['poster1.jpg', 'poster2.jpg', 'poster3.jpg'];
        const content = _.map(imgs, (img, idx) => {
            return (
                <div>
                    <img src={img} style={{height: {imgHeight}}}/>
                    <div className='introduce-carousel-text-panel'>
                        <h4 style={{margin:0}}>Deploying Angular to Azure {idx}</h4>
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
            <div className="">
                {carouselContent}
            </div>
        );
    }
}
