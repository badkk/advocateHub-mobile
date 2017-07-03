import React, {Component} from 'react'
import Menu from './commons/Menu'
/**
 * Created by t-zikfan on 2017/7/3.
 * The Azure Information Page
 */

export default class AzureInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history,
        }
    }
    render() {
        return (
            <div>
                <Menu history={ this.state.history } state={1}/>
            </div>
        );
    }
}