import React, {Component} from 'react';

import Wrapper from './Wrapper';

import piano from './gameImages/piano.png'



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

            </div>
        );
    }
}


export default Featured;
