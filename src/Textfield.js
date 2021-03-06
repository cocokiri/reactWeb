import React, {Component} from 'react';
import './css/Image.css';
import './css/Textfield.css';

function TextField(props) { //outfactor
    if (props.title && !props.text) {
        return props.title;
    }
    if (props.text) {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {props.title && <figcaption >
                    {props.title}
                </figcaption>}
                <div className="textfield" style={props.styling}>
                    {props.text}
                </div>
            </div>
        );
    }
    return (null)
}

export default TextField;