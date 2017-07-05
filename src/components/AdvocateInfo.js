import React, {Component} from 'react'
import Menu from './commons/Menu'
import {Paper} from 'material-ui'
/**
 * Created by lucas on 2017/7/4.
 * Advocate Info Page
 */
export default class AdvocateInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history
        }
    }
    render() {
        const personalGenPanel = (
            <Paper>

            </Paper>
        );
        return (
            <div>
                <Menu history={ this.state.history} state={2}/>
            </div>
        );
    }
}
