import React, {Component} from 'react'
import {connect} from 'react-redux'
import Codebird from 'codebird'
/**
 * Created by t-zikfan on 2017/7/12.
 * test react redux
 */
//presenter
/*global FB*/
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: '',
            access_token: ''
        }
    }
    componentWillMount() {
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
        const that = this;
        FB.login(function(response){
            // Note: The call will only work if you accept the permission request
            if (response.status === 'connected') {
                //success
                that.setState({
                    access_token: response.authResponse['accessToken']
                });
            }
            console.log(response);
        }, {scope: 'publish_actions, public_profile, user_events'});
    };
    myTwitterTest = () => {
        /*const that = this;
        FB.api(
            '/me/feed',
            'post',
            {
                message: 'Hello, advocateHub! #http://advocatehubmobile.westus.cloudapp.azure.com#',
                access_token: that.state.access_token
            },
            function(response) {
                if (!response || response.error) {
                    alert('Error occured');
                    console.log(response);
                } else {
                    console.log(response);
                    alert('Post ID: ' + response.id);
                    that.setState({
                        postId: response.id
                    })
                }
            });*/

        let cb = new Codebird;
        cb.setConsumerKey("rUSunMlRwYz5pqNtDpFMpyGiD", "KjRuDPBqZQyu9ojO9tMrjclGDZrx8XJIRyffvxPgOZ4u6w1VgF");
        cb.setToken("1284688014-ltPL0wlZHMQTGPDaokYGV2GfhjtqRYtdz4Beckb", "LTQq1J3hStlkx6CJEEsDaaBNrbAdeGLLJTTVH5fqaKs6L");
        cb.__call(
            "statuses_homeTimeline",
            {},
            function (reply) {
                console.log(reply);
            }
        );
    };
    myFacebookDelete = () => {
        FB.api(this.state.postId, 'delete', function(response) {
            if (!response || response.error) {
                alert('Error occured');
            } else {
                alert('Post was deleted');
            }
        });
    };
    myFacebookFollow = () => {
        const that = this;
        /* make the API call */
        FB.api(
            "/me/og.follows",
            "POST",
            {
                "profile": "https://www.facebook.com/fuyifuyifuyi"
            },
            function (response) {
                if (response && !response.error) {
                    /* handle the result */
                    console.log(response);
                } else {
                    console.log(response);
                }
            }
        );
    };
    render() {
       /* const fbShare = FB.ui({
            method: 'share_open_graph',
            action_type: 'og.likes',
            action_properties: JSON.stringify({
                object:'https://developers.facebook.com/docs/',
            })
        }, function(response){
            // Debug response (optional)
            console.log(response);
        });*/
        return (
            <div>
                <iframe src="https://www.facebook.com/plugins/follow.php?href=https%3A%2F%2Fwww.facebook.com%2Fzuck&width=107&height=21&layout=button_count&size=large&show_faces=true&appId=689977874520550"
                        width="auto"
                        height="auto"
                        scrolling="no"
                        frameBorder="0"
                        allowTransparency="true"/>

                <button onClick={this.myFacebookLogin}>facebook login</button>
                <input/>
                <button onClick={this.myTwitterTest}>twitter test</button>
                <button onClick={this.myFacebookDelete}>delete last status</button>
                <button onClick={this.myFacebookFollow}>Follow John Papa Pizza</button>
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