import React, {Component} from 'react'
import Menu from './commons/Menu'

/**
 * Created by t-zikfan on 2017/7/3.
 * More page
 */


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
                <Menu history={ this.state.history } state={3}/>
            </div>
        );
    }
}