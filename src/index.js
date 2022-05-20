import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Views/HomePageView';
import AdminView from './Views/AdminView'
import AboutView from './Views/AboutView'
import privacypolicy from './Views/privacypolicy'

import ContactComponent from './Components/ContactComponent'
import * as serviceWorker from './serviceWorker';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {history} from './history';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>  
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/contactus" component={ContactComponent} />
                    <Route path="/about" component={AboutView} />
                    <Route path="/privacypolicy" component={privacypolicy} />
                </Switch>
            </Router>    
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();