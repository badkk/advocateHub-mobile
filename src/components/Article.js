import React, {Component} from 'react';
import Menu from './commons/Menu'
import get from '../restful/Get'
/**
 * Created by t-zikfan on 2017/6/30.
 * Article page
 */
export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history
        };
        this.init = this.init.bind(this);
    }
    componentDidMount() {
        this.init();
    }
    init() {
        get('../data/user.json').then(res => {
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                <Menu history={ this.state.history } state={0}/>
            </div>);
    }
}