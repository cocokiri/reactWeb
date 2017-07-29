import React, {Component} from 'react';

import Wrapper from './Wrapper';

import piano from './gameImages/piano.png';
import polyphonic from './gameImages/polyphonic.png';

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
        // caption: "Play the Piano on your Keyboard. \n\n" +
        // "Face the Music",
        linkTo: null,
        url: "https://dacapo.io/web-piano",
        subTitle: null,
        alt: null,
        styling: "imageSmaller"
    },
    {
        name: "Web's fastest Polyphonic Pitch Detection and Visualization",
        path: polyphonic,
        // caption: "See your music live \n\n" +
        // "+ develop insane intuition" +
        // "+ An interactive spectrogram that can instantly detect the note and chord(!) you are playing" +
        // "+ faster & more accurate than what Yamaha, RockSmith etc. have behind the pay-wall (I checked...I know it's sad)",
        linkTo: null,
        url: 'https://dacapo.io/polyphonic-pitch-detector',
        subTitle: null,
        styling: "imageSmaller",
        alt: null
    }
]

class Featured extends Component {
    render() { //hacky CSS --- kin bock!
        return (
            <div>
                <div className="flexContainWrap" style={{flexDirection:"column"}}>
                    <Image data={images[0]}/>
                    <div className="featureFig" style={{lineHeight: 3}}>
                        Piano FunFun
                    </div>
                    <div className="featureFig" style={{background: "red", fontWeight: "normal"}}>
                        Play the Piano on your Keyboard
                    </div>
                    <div className="textfield"> Face the Music.
                        Space Shift Sine </div>
                </div>

                <div className="flexContainWrap" style={{flexDirection:"column"}}>
                    <Image data={images[1]}/>
                    {/*<Image data={images[0]}/>*/}
                    <div className="featureFig" style={{lineHeight: 3}}>
                        Featured: Polyphonic Pitch Visualizer
                    </div>
                    <div className="featureFig" style={{background: "red", fontWeight: "normal"}}>
                        See your music live
                    </div>
                    <Textfield text="An interactive spectrogram that can instantly detect the note and chord(!) you are playing.
                Get a glimpse at the physics of sound while jamming or practicing. Proud to say: It is the most accurate music viz and note detection on the internet"/>
                </div>
            </div>
        );
    }
}

export default Featured;
