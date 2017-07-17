import React, {Component} from 'react'
import SearchBar from 'material-ui-search-bar'
import { Paper, SvgIcon, Divider} from 'material-ui'
import Slider from 'react-slick'
import Menu from './Menu'
import BtmTextAvatar from './BtmTextAvatar'
import '../styles/Home.css'
/**
 * Created by lucas on 2017/7/16.
 * The Home page
 */
const appBarHeight = window.screen.height * 0.1;
const bodyHeight = window.screen.height * 0.82;
export default class HomePresenter extends Component{
    render() {
        //ms logo
        const LogoIcon =  (props) => (
            <SvgIcon
                {...props}
                viewBox="0 0 64 64"
                className="icon"
                style={{height: '30px', width: '30px', marginRight: 0}}
            >
                <path className="st0" d="M0 0h30v30H0z"/>
                <path className="st1" d="M34 0h30v30H34z"/>
                <path className="st2" d="M34 34h30v30H34z"/>
                <path className="st3" d="M0 34h30v30H0z"/>
            </SvgIcon>
        );
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
        const content = [
            <div className="home-activity-shows" style={{backgroundColor: '#EC407A'}}>Azure Info1</div>,
            <div className="home-activity-shows" style={{backgroundColor: '#3F51B5'}}>Azure Info2</div>,
            <div className="home-activity-shows" style={{backgroundColor: '#8BC34A'}}>Azure Info3</div>
        ];
        const carouselContent = (
            <div>
                <Slider {...settings}>
                    {content}
                </Slider>
            </div>
        );
        const topAdvocates = [
            <BtmTextAvatar title="John Papa" src="johnpapa.png" touchFunc={() => {this.props.history.push('/advocate/johnpapa')}}/>,
            <BtmTextAvatar title="Mary Mama"/>,
            <BtmTextAvatar title="Linda Xu"/>,
            <BtmTextAvatar title="Christine Zhao"/>,
            <BtmTextAvatar title="Hou Yi"/>
        ];
        return (
            <div>
                <Paper zDepth={0} style={{height: appBarHeight}} className="home-app-header">
                    <LogoIcon />
                    <SearchBar
                        hintText="Search advocate"
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                    />
                </Paper>
                <div style={{height: bodyHeight, overflowY: 'auto'}}>
                    <div> {carouselContent} </div>
                    <Paper>
                        <p className="top-advocates-title">Top Advocates</p>
                        <Divider />
                        <div className="top-advocates-panel">
                            {topAdvocates}
                        </div>
                    </Paper>
                    <div>
                    </div>
                </div>

                <Menu history={ this.props.history} state={2}/>
            </div>
        );
    }
}
