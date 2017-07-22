import React, {Component} from 'react';
import    interval    from    "./gameImages/IntervalTraining_800x290.gif";
import    histo    from    "./gameImages/MelodyHistogram.png";
import    mouseMusic    from    "./gameImages/MouseMusic.png";
import    shooter3d    from    "./gameImages/MusicShooter.png";
import    catcher    from    "./gameImages/NoteCatcher.png";
import    piano    from    "./gameImages/piano.png";
import    monophonic    from    "./gameImages/PitchVis.png";
import    littleprince    from    "./gameImages/Polygon800.png";
import    polyphonic    from    "./gameImages/polyphonic.png";
import    shooter2d    from    "./gameImages/SpaceShooter_800x600.gif";

import Wrapper from './Wrapper'
import Button from './Button'
import Image from './Image'

const gameImages = [
    {
        name: "Web fastest Polyphonic Pitch Detection and Visualization",
        path: polyphonic,
        caption: "See your music live \n\n" +
        "+ develop insane intuition" +
        "+ An interactive spectrogram that can instantly detect the note and chord(!) you are playing" +
        "+ faster & more accurate than what Yamaha, RockSmith etc. have behind the pay-wall (I checked...I know it's sad)",
        linkTo:null,
        url:'https://dacapo.io/polyphonic-pitch-detector',
        subTitle: null,
        alt: null
    },
    {
        name: "Piano FunFun",
        path: piano,
        caption: "Play the Piano on your Keyboard. You can: \n\n" +
        "+ shift sound slowly or with Octave jumps" +
        "+ see the chords you're playing" +
        "+ face the music",
        linkTo: null,
        url: 'https://dacapo.io/web-piano',
        subTitle: null,
        alt: null
    },
    {
        name: "RealTime Pitch Detection and Visualization",
        path: monophonic,
        caption: "I made this intuitive, realtime spectrogram because all other pitch detection and spectrogram products on web/mobile were horrible.",
        url: 'https://dacapo.io/visual-pitch/',
        linkTo: null,
        subTitle: null,
        alt: null
    },

    {
        name: "Little Prince",
        path: littleprince,
        caption: "Help Explorer Saint Exupery through the Rainbow Desert \n\n" +
        "+ Control plane height with pitch (voice/instrument)" + "\n\n" + "" +
        "Abandoned -- Decided against using three.js for now. Polygon config for plane was borrowed. Will ask for microphone access.",
        url:'https://dacapo.io/little-prince/',
        linkTo: null,
        subTitle: null,
        alt: null
    },
    {
        name: "Mouse Music - Oscillators",
        path: mouseMusic,
        caption: "Use your mouse to play with oscillator sounds. Other than most music web/mobile XPs I'm stricter with the mapping. " +
        "This has the side-effect of actually learning something." + "\n \n" +
        "+ Get a feeling for intervals and pitch \n" +
        "+ See the melody of the last few seconds \n" + "\n\n" + "" +
        "It will ask you for microphone access. Might not work on all browsers",
        url: 'https://dacapo.io/mouse-oscillator/',
        linkTo: null,
        subTitle: null,
        alt: null
    },
    {
        name: "Melody Histogram",
        path: histo,
        caption: " See a histogram of your pitch or monophonic sounds \n\n" +
        "+ Shows you how volatile your voice is \n" +
        "+ Gives good sense of melody you're playing \n" +
        "+ Challenge yourself to a singing range of one octave \n\n" +
        "Could need a longer buffer to correct for pitch jumps, but I moved on",
        linkTo: null,
        subTitle: null,
        alt: null
    },
    {
        name: "Space Shooter 3D",
        path: shooter3d,
        caption: "Same concept as the earlier 2D spaceshooter. Dodge X, shoot Y -- you know the spiel. The pitch controls change with time and are always " +
        "part of the major scale. I demoed this game in San Francisco at the Noisebridge 10-Year Anniversary after being part of a game dev bootcamp there",
        linkTo: null,
        subTitle: null,
        alt: null
    },
    {
        name: "Note Catcher",
        path: catcher,
        caption: "I borrowed another disappointing Pitch Detection module. You collect the colored triangles by playing their corresponding notes. " +
        "The speed and width of the 'player' depend on how consistent the pitch sounds",
        linkTo: null,
        subTitle: null,
        alt: null
    },
    {
        name: "Space Shooter 2D",
        path: shooter2d,
        caption: "After two weeks of coding I used the YIN Pitch Detection algorithm to make a guitar controlled space shooter",
        linkTo: null,
        subTitle: null,
        alt: null
    },
    {
        name: "Harmonic Interval Trainer",
        path: interval,
        caption: "Humble beginnings. The program tests your ear. It plays an interval and you have to guess it",
        linkTo: null,
        subTitle: null,
        alt: null
    }
];

const bgStyle= {
    background: "linear-gradient(-170deg, #2376ae 0%, #c16ecf 100%)"
}

const Play = function (props) {
    return (
        <div style={bgStyle}>
            {/*{gameImages.map(el => {*/}
                    {/*return (*/}
                        {/*<div class="imageWrap">*/}
                        {/*<Image src={el.path}/>,*/}
                        {/*</div>*/}
                    {/*)*/}
                {/*}*/}
            {/*)}*/}


             <Wrapper segment={gameImages}/>
        </div>
    )
};

export default Play;