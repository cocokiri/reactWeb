import React, { Component } from 'react';

const HypLink = function (props) {
    if (!props.link || !props.text) console.log("Hyplink without input")
    return(
        <a href={props.link}> {props.text} </a>
    )
}

export default HypLink;