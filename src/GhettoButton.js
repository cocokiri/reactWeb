import React from 'react';
import './css/Button.css';

const GhettoButton = function (props) {
    return (
        <button>
            {props ? <a href={props.ghettoLink}> PLAY </a> : ''}
        </button>
    )
};

export default GhettoButton;