import React from 'react';
import './css/Button.css';
import {Link} from 'react-router-dom'

const Button = function (props) {
    const link = props.linkTo;
    let isUrl = props ?
        link.includes("www") || link.includes("http") || link.includes(".")
        : false;
    console.log(isUrl, 'isUrl')
    return (
        <button>
            {props ? (isUrl ? <a href={link}>PLAY </a> : <Link to={props.linkTo}>PLAY</Link>) : ''}
        </button>
    )
};

export default Button;