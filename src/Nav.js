import React, {Component} from 'react';
import './css/Nav.css';
import {Link} from 'react-router-dom'
// import ShareBar from './ShareBar'

const Nav = function (props) {
    //TODO contains links to pages
    //#about works fuer hashrouter
    // const routerLoc = props.location.pathname;
    // console.log(routerLoc, "<loc")
    return (
            <nav>
                {/*<a href="/">HOME</a>*/}
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <a href='https://dacapo.io/play' >PLAY</a>
            </nav>
    )
};

export default Nav;