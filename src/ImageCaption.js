import React, {Component} from 'react';
import './ImageCaption.css';

function ImageCaption(props) {
    return (
        <div>
            <br />
            {props.caption}
        </div>
    )
}


export default ImageCaption;
