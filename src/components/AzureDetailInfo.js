import React, {Component} from 'react'
import {AppBar} from 'material-ui'
import {NavigationArrowBack} from 'material-ui/svg-icons'
import hackiFrame from '../utils/hackiFrame'
/**
 * Created by t-zikfan on 2017/7/6.
 */
export default class AzureDetailInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            history: this.props.history,
            azureLink : this.props.history.location.state.link
        };
        this.handleBack = this.handleBack.bind(this);
    }
    handleBack() {
      this.state.history.goBack();
    };
    render() {
        const appHeight = window.screen.height * 0.1;
        const panelHeight = window.screen.height - appHeight;
        return (
            <div>
                <AppBar title="Azure Detail"
                        titleStyle={{fontSize:'18px'}}
                        iconElementLeft={<NavigationArrowBack color="white"/>}
                        className='app-header'
                        onLeftIconButtonTouchTap={this.handleBack}
                        style={{maxHeight:appHeight}}
                />
                <iframe src={this.state.azureLink} width='100%' height={panelHeight} frameBorder={0}/>
            </div>
        );
    }
}