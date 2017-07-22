import React, {Component} from 'react';

import Wrapper from './Wrapper';

import piano from './gameImages/piano.png';

import Button from './Button';
import Textfield from './Textfield';
import LazyLoad from 'react-lazy-load';
import Image from './Image'
import './css/Wrapper.css';

// {this.props.url && <Button linkTo={this.props.url}/>}
// <Textfield title={this.props.name} text={this.props.caption} />

const images = [
    {
        name: "Piano FunFun",
        path: piano,
        caption: "Play the Piano on your Keyboard. \n\n" +
        "Face the Music",
        linkTo: null,
        url: "https://dacapo.io/web-piano",
        subTitle: null,
        alt: null
    }
]

class Featured extends Component {
    render() {
        return (
            <div>
                {/*{this.props.children}*/}
                <Wrapper segment={images}/>
                {/*<Image data={images[0]}/>*/}

                {/*{this.props.url && <Button linkTo={this.props.url}/>}*/}
                {/*<Textfield title={this.props.name} text={this.props.caption} />*/}

            </div>
        );
    }
}


export default Featured;
