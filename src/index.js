import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import About from "./AboutPage";
import Play from "./Play";
import Illustrate from './Illustrate';
import NotFound from './NotFound';
import Sketches from './Sketches';


import Nav from './Nav';

const history = createBrowserHistory();


//don't use /* zuerst.... prueft Routen sequentiell
class Index extends Component {
    render() {
        return (
            <div>
                <BrowserRouter history={history}>
                    {/*<Route path="/" component={Nav} />*/}
                    <div>
                        <Nav/>
                        <Switch>
                            <Route exact path="/" component={App}/>
                            <Route path="/illustrate" component={Illustrate}/>
                            <Route path="/about" component={About}/>
                            <Route path="/play" component={() => window.location = "https://dacapo.io/play"} />
                            <Route path="/web-piano" component={() => (window.location.href = "https://dacapo.io/web-piano")} />
                            {/*<Route path="/sketch" component={Sketches}/>*/}
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}


ReactDOM.render(<About />, document.getElementById('root'));
registerServiceWorker();

