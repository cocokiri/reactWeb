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
                <figcaption style={{minWidth: '50vw'}}>
                    {props.title}
                </figcaption>
                <div className="textfield">
                    {props.text}
                </div>
            </div>
        );
    }
    return (null)
}

export default TextField;