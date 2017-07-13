import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import './App.css';
import Article from './presenters/Article'
import AzureInfo from './presenters/AzureInfo'
import Meeting from './presenters/Meeting'
import AdvocateInfoContainer from './containers/AdvocateInfoContainer'
import More from './presenters/More'
import AzureDetailInfo from './presenters/AzureDetailInfo'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {TestContainer, counter} from './presenters/Test'
import rootReducer from './redux/reducers/RootReducer'

// Phone touch action
injectTapEventPlugin();
//reduce global store
const store = createStore(rootReducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={Meeting}/>
                        <Switch>
                            <Route path="/azure/detail" component={AzureDetailInfo}/>
                            <Route path="/azure" component={AzureInfo}/>
                        </Switch>
                        <Route path="/advocate" component={AdvocateInfoContainer}/>
                        <Route path="/article" component={Article}/>
                        <Route path="/more" component={More}/>
                        <Route path="/test" component={TestContainer}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
