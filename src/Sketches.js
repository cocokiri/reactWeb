import React, {Component} from 'react';
import Image from './Image'
import Textfield from './Textfield'
import Button from './Button'
import './css/Image.css';


import    sk0     from    "./sketch/sketch0.jpg";
import    sk1     from    "./sketch/sketch1.jpg";
import    sk2     from    "./sketch/sketch2.jpg";
import    sk3     from    "./sketch/sketch3.jpg";
import    sk4     from    "./sketch/sketch4.jpg";
import    sk5     from    "./sketch/sketch5.jpg";
import    sk6     from    "./sketch/sketch6.jpg";
import    sk7     from    "./sketch/sketch7.jpg";
import    sk8     from    "./sketch/sketch8.jpg";
import    sk9     from    "./sketch/sketch9.jpg";
import    sk10     from    "./sketch/sketch10.jpg";
import    sk11     from    "./sketch/sketch11.jpg";
import    sk12     from    "./sketch/sketch12.jpg";
import    sk13     from    "./sketch/sketch13.jpg";
import    sk14     from    "./sketch/sketch14.jpg";
import    sk15     from    "./sketch/sketch15.jpg";
import    sk16     from    "./sketch/sketch16.jpg";
import    sk17     from    "./sketch/sketch17.jpg";
import    sk18     from    "./sketch/sketch18.jpg";
import    sk19     from    "./sketch/sketch19.jpg";
import    sk20     from    "./sketch/sketch20.jpg";
import    sk21     from    "./sketch/sketch21.jpg";
import    sk22     from    "./sketch/sketch22.jpg";
import    sk23     from    "./sketch/sketch23.jpg";
import    sk24     from    "./sketch/sketch24.jpg";
import    sk25     from    "./sketch/sketch25.jpg";
import    sk26     from    "./sketch/sketch26.jpg";
import    sk27     from    "./sketch/sketch27.jpg";
import    sk28     from    "./sketch/sketch28.jpg";
import    sk29     from    "./sketch/sketch29.jpg";
import    sk30     from    "./sketch/sketch30.jpg";
import    sk31     from    "./sketch/sketch31.jpg";
import    sk32     from    "./sketch/sketch32.jpg";
import    sk33     from    "./sketch/sketch33.jpg";
import    sk34     from    "./sketch/sketch34.jpg";
import    sk35     from    "./sketch/sketch35.jpg";
import    sk36     from    "./sketch/sketch36.jpg";
import    sk37     from    "./sketch/sketch37.jpg";
import    sk38     from    "./sketch/sketch38.jpg";
import    sk39     from    "./sketch/sketch39.jpg";
import    sk40     from    "./sketch/sketch40.jpg";
import    sk41     from    "./sketch/sketch41.jpg";
import    sk42     from    "./sketch/sketch42.jpg";
import    sk43     from    "./sketch/sketch43.jpg";
import    sk44     from    "./sketch/sketch44.jpg";
import    sk45     from    "./sketch/sketch45.jpg";
import    sk46     from    "./sketch/sketch46.jpg";
import    sk47     from    "./sketch/sketch47.jpg";
import    sk48     from    "./sketch/sketch48.jpg";
import    sk49     from    "./sketch/sketch49.jpg";
import    sk50     from    "./sketch/sketch50.jpg";
import    sk51     from    "./sketch/sketch51.jpg";
import    sk52     from    "./sketch/sketch52.jpg";
import    sk53     from    "./sketch/sketch53.jpg";
import    sk54     from    "./sketch/sketch54.jpg";
import    sk55     from    "./sketch/sketch55.jpg";
import    sk56     from    "./sketch/sketch56.jpg";
import    sk57     from    "./sketch/sketch57.jpg";
import    sk58     from    "./sketch/sketch58.jpg";
import    sk59     from    "./sketch/sketch59.jpg";
import    sk60     from    "./sketch/sketch60.jpg";
import    sk61     from    "./sketch/sketch61.jpg";
import    sk62     from    "./sketch/sketch62.jpg";
import    sk63     from    "./sketch/sketch63.jpg";
import    sk64     from    "./sketch/sketch64.jpg";
import    sk65     from    "./sketch/sketch65.jpg";
import    sk66     from    "./sketch/sketch66.jpg";
import    sk67     from    "./sketch/sketch67.jpg";
import    sk68     from    "./sketch/sketch68.jpg";
import    sk69     from    "./sketch/sketch69.jpg";
import    sk70     from    "./sketch/sketch70.jpg";
import    sk71     from    "./sketch/sketch71.jpg";
import    sk72     from    "./sketch/sketch72.jpg";
import    sk73     from    "./sketch/sketch73.jpg";
import    sk74     from    "./sketch/sketch74.jpg";
import    sk75     from    "./sketch/sketch75.jpg";
import    sk76     from    "./sketch/sketch76.jpg";
import    sk77     from    "./sketch/sketch77.jpg";
import    sk78     from    "./sketch/sketch78.jpg";
import    sk79     from    "./sketch/sketch79.jpg";
import    sk80     from    "./sketch/sketch80.jpg";
import    sk81     from    "./sketch/sketch81.jpg";
import    sk82     from    "./sketch/sketch82.jpg";
import    sk83     from    "./sketch/sketch83.jpg";
import    sk84     from    "./sketch/sketch84.jpg";
import    sk85     from    "./sketch/sketch85.jpg";
import    sk86     from    "./sketch/sketch86.jpg";
import    sk87     from    "./sketch/sketch87.jpg";
import    sk88     from    "./sketch/sketch88.jpg";
import    sk89     from    "./sketch/sketch89.jpg";
import    sk90     from    "./sketch/sketch90.jpg";
import    sk91     from    "./sketch/sketch91.jpg";
import    sk92     from    "./sketch/sketch92.jpg";
import    sk93     from    "./sketch/sketch93.jpg";


let sketches = [
    sk0,
    sk1,
    sk2,
    sk3,
    sk4,
    sk5,
    sk6,
    sk7,
    sk8,
    sk9,
    sk10,
    sk11,
    sk12,
    sk13,
    sk14,
    sk15,
    sk16,
    sk17,
    sk18,
    sk19,
    sk20,
    sk21,
    sk22,
    sk23,
    sk24,
    sk25,
    sk26,
    sk27,
    sk28,
    sk29,
    sk30,
    sk31,
    sk32,
    sk33,
    sk34,
    sk35,
    sk36,
    sk37,
    sk38,
    sk39,
    sk40,
    sk41,
    sk42,
    sk43,
    sk44,
    sk45,
    sk46,
    sk47,
    sk48,
    sk49,
    sk50,
    sk51,
    sk52,
    sk53,
    sk54,
    sk55,
    sk56,
    sk57,
    sk58,
    sk59,
    sk60,
    sk61,
    sk62,
    sk63,
    sk64,
    sk65,
    sk66,
    sk67,
    sk68,
    sk69,
    sk70,
    sk71,
    sk72,
    sk73,
    sk74,
    sk75,
    sk76,
    sk77,
    sk78,
    sk79,
    sk80,
    sk81,
    sk82,
    sk83,
    sk84,
    sk85,
    sk86,
    sk87,
    sk88,
    sk89,
    sk90,
    sk91,
    sk92,
    sk93,
];


function Sketches(props) {


    return (
        <div class="imageWrap">
            <div>
                {sketches.map(el =>
                    <div> <Image class={'sketch'} src={el} /> </div>)
                }
            </div>
        </div>

        // <Image class={props.class} src={thumb.path} name={thumb.name} caption={thumb.caption} linkTo={thumb.linkTo}/>
    )
}

export default Sketches;