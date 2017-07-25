import React, {Component} from 'react'
import AdminAppBar from "../commons/AdminAppBar";
/**
 * Created by t-zikunfan
 * Date: 11:03 2017/7/25
 */
export default class AdvocateAdminHome extends Component {
    render() {
        return (
            <div>
                <AdminAppBar history={this.props.history} dark={false}/>

            </div>
        );
    }
}