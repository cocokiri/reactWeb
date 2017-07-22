import React, {Component} from 'react';
import './App.css';

function HeaderSplit(props) {
    "use strict";
    return (
        <h1 className="splitter"> {props.text} </h1>
    )

}

class App extends Component {
    constructor () {
        super();
        this.state = {
            redirect: false
        }
    }

    render() {
        return (
            <div>
                <HeaderSplit text={"Adhocumentaries"}/>

                <iframe title="Induction: Learning to Make" width="560" height="315" src="https://www.youtube.com/embed/ZcmAc-bAXqY"
                        frameborder="0" allowfullscreen></iframe>

                <iframe title="Seclusion: Learning to See" width="560" height="315" src="https://www.youtube.com/embed/Vuq-5UTbry0" frameborder="0"
                        allowfullscreen></iframe>

                <HeaderSplit text={"Illustration"}/>

                <Display segment={images}/>

                <HeaderSplit text={"Sketches"}/>

                <Display class={"imagesmall"} segment={sketches}/>
            </div>
        );
    }
}

(function (w,i,d,g,e,t,s) {w[d] = w[d]||[];t= i.createElement(g);
    t.async=1;t.src=e;s=i.getElementsByTagName(g)[0];s.parentNode.insertBefore(t, s);
})(window, document, '_gscq','script','//widgets.getsitecontrol.com/87117/script.js');

export default App;
