import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {TestContainer} from './presenters/Test'
import rootReducer from './redux/reducers/RootReducer'
import TalkDetailContainer from './containers/TalkDetailContainer'
import AdvocateInfoContainer from './containers/AdvocateInfoContainer'
import HomeContainer from './containers/HomeContainer'
import AdvocateTwitterLogin from './presenters/admin/AdvocateTwitterLogin'
import AdvocateInfoChecker from './presenters/admin/AdvocateInfoChecker'
import AdvocateAdminHome from './presenters/admin/AdvocateAdminHome'
import AdvocateAuthCallback from './presenters/admin/AdvocateAuthCallback'
import './App.css';

// phone touch tap action
injectTapEventPlugin();
// reducer global store
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeContainer}/>
                    {/* detail page */}
                    <Route path="/talk/:id" component={TalkDetailContainer}/>
                    <Route path="/advocate/:id" component={AdvocateInfoContainer}/>
                    {/*<Route path="/article" component={Article}/>*/}
                    <Route path="/test" component={TestContainer}/>
                    <Route path="/admin/callback" component={AdvocateAuthCallback}/>
                    <Route path="/admin/:userId/infocheck" component={AdvocateInfoChecker}/>
                    <Route path="/admin/login" component={AdvocateTwitterLogin}/>
                    <Route path="/admin/:userId" component={AdvocateAdminHome}/>
                    <Route path="/admin" component={AdvocateTwitterLogin}/>
                </Switch>
            </Router>
        </Provider>
    );
}
