import React from 'react';
import './css/Button.css';
import {Link} from 'react-router-dom'



const Button = function (props) {
    const link = props.linkTo || "ala";
    let isUrl = props ?
        link.includes("www") || link.includes("http") || link.includes(".")
        : false;
    console.log(isUrl, 'isUrl')
    return (
            <div>
            {props ? <a style={{color: "white"}} href={link} > <button style={{minWidth: "70vw"}}> DEMO </button></a> : ''}
            </div>
    )
};

export default Button;