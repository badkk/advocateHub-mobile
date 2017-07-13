import React, {Component} from 'react'
import Menu from './Menu'

/**
 * Created by t-zikfan on 2017/7/3.
 * More page
 */

const minContentHeight = window.screen.height * 0.92;
export default class More extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history,
        }
    }
    render() {
        return (
            <div>
                <div style={{minHeight: minContentHeight}}/>
                    <Menu history={ this.state.history } state={3}/>
            </div>
        );
    }

}