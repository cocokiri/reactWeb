import React from 'react';
import './css/Button.css';
import {Link} from 'react-router-dom'

const Button = function (props) {
    return (
        <button>
            {props ? <Link to={props.linkTo}>PLAY</Link> : ''}
        </button>
    )
};

export default Button;