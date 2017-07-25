import React, {Component} from 'react'
import get from '../../restful/Get'
import * as _ from "underscore";
import AdminAppBar from "../commons/AdminAppBar";


/**
 * Created by lucas on 2017/7/24.
 * Check User Info from twitter and complete the other information
 */
export default class AdvocateInfoChecker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.match.params.userId,
            userInfo: {}
        };
    }
    componentDidMount() {
        get('/user/login?userId='+this.state.userId).then(res => {
            if (res['data']) {
                this.setState({
                    userInfo: {
                        'username': 'Lucas',
                    }
                })
            } else {
                this.setState({
                    userInfo: {
                        'username': null
                    }
                })
            }
        })

    }
    render() {
        console.log(this.state.userInfo);
        let content = {};
        if (_.isEmpty(this.state.userInfo)) {
            content =  <div>Loading...</div>;
        } else if (_.isEmpty(this.state.userInfo['username'])) {
            content = <div>No User Exist</div>
        } else {
            content = <div>Login Success!</div>
        }
        return (
            <div>
                <AdminAppBar history={this.props.history} dark={true}/>
                {content}
            </div>
        );
    }
}

