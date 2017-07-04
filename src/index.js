import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import Illustrate from './Illustrate';
import NotFound from './NotFound'
import createHashHistory from 'history/createHashHistory';


const history = createHashHistory();
console.log(history);


const Index = React.createClass({
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path= "/*" component={NotFound} />
                    <Route path="/illustrate" component={Illustrate}/>
                    <Route path="/about" component={About}/>
                    <Route path="/play" component={Play}/>
                </Switch>
            </Router>
        )
    }
});

// export default Index;


ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

