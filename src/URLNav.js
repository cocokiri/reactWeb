import React, {Component} from 'react';
import './css/Nav.css';
import {Link} from 'react-router-dom'
// import ShareBar from './ShareBar'

const URLNav = function (props) {
    //TODO contains links to pages
    //#about works fuer hashrouter
    // const routerLoc = props.location.pathname;
    // console.log(routerLoc, "<loc")
    return (
            <nav>
                {/*<a href="/">HOME</a>*/}
                <a href='https://dacapo.io/' >ABOUT</a>
                <a href='https://dacapo.io/play' >PLAY</a>
                <a href='https://dacapo.io/about' >HOME</a>
            </nav>
    )
};

export default URLNav;