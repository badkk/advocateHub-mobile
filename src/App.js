import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import './App.css';
import Article from './components/Article'
import AzureInfo from './components/AzureInfo'
import Meeting from './components/Meeting'
import More from './components/More'
import injectTapEventPlugin from 'react-tap-event-plugin';
// Phone touch action
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Meeting}/>
                    <Route path="/azure" component={AzureInfo}/>
                    <Route path="/advocate" component={Article}/>
                    <Route path="/more" component={More}/>
                </div>
            </Router>
        );
    }
}

export default App;
