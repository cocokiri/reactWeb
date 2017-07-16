import React, {Component} from 'react';
import './css/Nav.css';
import {Link} from 'react-router-dom'


const Nav = function (props) {
    //TODO contains links to pages
    //#about works fuer hashrouter
    return (
            <nav>
                {/*<a href="/">HOME</a>*/}
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/play'>PLAY</Link>
            </nav>
    )
};

export default Nav;