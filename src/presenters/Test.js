import React, {Component} from 'react'
import {connect} from 'react-redux'
/**
 * Created by t-zikfan on 2017/7/12.
 * test react redux
 */
//presenter
/*global FB*/
class Test extends Component {
    componentDidMount() {
        window.fbAsyncInit = function() {
            FB.init({
                appId            : '689977874520550',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v2.9'
            });
            FB.AppEvents.logPageView();
        };

        (function(d, s, id){
            let js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'))
    }
    myFacebookLogin= () => {
        FB.login(function(){}, {scope: 'publish_actions'});
    };
    render() {
        return (
            <div>
                <input/>
                <button onClick={this.myFacebookLogin}>facebook login</button>
            </div>
        );
    }
}

//action
const increaseAction = {
  type: 'increase'
};
//reducer
export function CounterReducer(state = {count: 0}, action) {
    return state;
}
//binding
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

export const TestContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);