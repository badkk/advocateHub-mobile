import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import './App.css';
import Article from './components/Article'
import AzureInfo from './components/AzureInfo'
import Meeting from './components/Meeting'
import Advocate from './components/AdvocateInfo'
import More from './components/More'
import AzureDetailInfo from './components/AzureDetailInfo'
import injectTapEventPlugin from 'react-tap-event-plugin';
// Phone touch action
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Meeting}/>
                    <Switch>
                        <Route path="/azure/detail" component={AzureDetailInfo}/>
                        <Route path="/azure" component={AzureInfo}/>
                    </Switch>
                    <Route path="/advocate" component={Advocate}/>
                    <Route path="/article" component={Article}/>
                    <Route path="/more" component={More}/>
                </div>
            </Router>
        );
    }
}

export default App;
