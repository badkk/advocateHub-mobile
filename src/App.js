import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import './App.css';
import Article from './components/Article'
import injectTapEventPlugin from 'react-tap-event-plugin';
// Phone touch action
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Article}/>
                    <Route path="/explore" component={Article}/>
                    <Route path="/advocates" component={Article}/>
                    <Route path="/more" component={Article}/>
                </div>
            </Router>
        );
    }
}

export default App;
