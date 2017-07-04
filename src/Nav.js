import React, {Component} from 'react';
import './css/Nav.css'

const Nav = function (props) {
    //TODO contains links to pages

    return (
        <nav>
            <a href="/about/">ABOUT</a>
            <a href="/play/">PLAY</a>
            <a href="/">HOME</a>
        </nav>
    )
};

export default Nav;