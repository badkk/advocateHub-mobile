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
import './App.css';
import MeetingDetailPresenter from './presenters/MeetingDetailPresenter'
import AdvocateInfoContainer from './containers/AdvocateInfoContainer'
import HomePresenter from './presenters/HomePresenter'
import AdvocateTwitterLogin from './presenters/admin/AdvocateTwitterLogin'
import AdvocateInfoChecker from './presenters/admin/AdvocateInfoChecker'

// Phone touch action
injectTapEventPlugin();
//reduce global store
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePresenter}/>
                    {/* detail page */}
                    <Route path="/meeting/:id" component={MeetingDetailPresenter}/>
                    <Route path="/advocate/:id" component={AdvocateInfoContainer}/>
                    {/*<Route path="/article" component={Article}/>*/}
                    <Route path="/test" component={TestContainer}/>
                    <Route path="/admin/:userId" component={AdvocateInfoChecker}/>
                    <Route path="/admin/login" component={AdvocateTwitterLogin}/>
                    <Route path="/admin" component={AdvocateTwitterLogin}/>
                </Switch>
            </Router>
        </Provider>
    );
}
