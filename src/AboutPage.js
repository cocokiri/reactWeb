import React, {Component} from 'react';
import Textfield from './Textfield';
import Illustrate from './Illustrate'
import URLNav from './URLNav'

function HeaderSplit(props) {
    "use strict";
    return (
        <h1 className="splitter"> {props.text} </h1>
    )

}


//FINE ARTS MUSIC CODE. ... no need
{/*<div style={{display: "flex", justifyContent: "flex-start"}}>*/}
    {/*<Textfield text=": FINE ARTS :" styling={{background: "black", color: "white"}}/>*/}
    {/*<Textfield text="+"*/}
               {/*styling={{background: "red", color: "white", lineHeight: "0em", fontWeight: "bold"}}/>*/}

    {/*<Textfield text="\ MUSIC \" styling={{background: "black", color: "white"}}/>*/}
    {/*<Textfield text="x"*/}
               {/*styling={{background: "red", color: "white", lineHeight: "0em", fontWeight: "bold"}}/>*/}
    {/*<Textfield text=" CODE  " styling={{background: "black", color: "white"}}/>*/}
    {/*<div style={{margin: "2em"}}/>*/}
{/*</div>*/}

class About extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    render() { //soooo hacky..
        return (
            <div>
                <URLNav/>
                <Textfield text="Hi, I'm Markus"/>

                <Illustrate/>

                <HeaderSplit text={"Adhocumentaries"}/>
                <div style={{margin: "2em"}}/>

                <Textfield text="Prague. Nothing fancy, just an old Iphone 5 and a 6$ desk tripod"/>
                <div className="flexContainWrap" style={{flexDirection: "column"}}>
                    <iframe title="Seclusion: Learning to See" width="560" height="315"
                            src="https://www.youtube.com/embed/Vuq-5UTbry0" frameborder="0"
                            allowfullscreen></iframe>
                    <div style={{margin: "3em"}}/>
                </div>

                <Textfield text="San Francisco. Can a lack of filming and planning be made up in the cutting room? Possibly "/>
                <div className="flexContainWrap" style={{flexDirection: "column"}}>
                    <iframe title="Induction: Learning to Make" width="560" height="315"
                            src="https://www.youtube.com/embed/ZcmAc-bAXqY"
                            frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}

(function (w, i, d, g, e, t, s) {
    w[d] = w[d] || [];
    t = i.createElement(g);
    t.async = 1;
    t.src = e;
    s = i.getElementsByTagName(g)[0];
    s.parentNode.insertBefore(t, s);
})(window, document, '_gscq', 'script', '//widgets.getsitecontrol.com/87117/script.js');

export default About;
