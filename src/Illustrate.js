import React, {Component} from 'react';
import Wrapper from './Wrapper';


import circuitBody from "./images/ElectricBody.gif";
import female from "./images/Fragmentation.gif";
import exploit from "./images/Exploitation.png";
import leavinghome from "./images/LeavingHome.png";
import narrativeillusion from "./images/NarrativeIllusion.png";
import socialmedia from "./images/SocialMedia";
import practice2 from "./images/BargueHead"
import adman from "./images/TheAdMan.png";
import practice from "./images/BargueFoot";
import theorists from "./images/TheTheorists.png";
import bloggersphere from "./images/TheBloggersphere.png";
import anim from "./images/Anim";

let images = [
    {
        name: "The Theorists",
        path: theorists,
        caption: "The theorists sit on a platonic solid, " +
        "discussing their elaborate models while reality is having something else in mind"
    },

    {
        name: "Advertising",
        path: adman,
        caption: "The Ad Man behind his mask. Anonymously attacking through his marketing channel. " +
        "Our senses too naked, our hands too short."
    },

    {
        name: "Narrative Illusion",
        path: narrativeillusion,
        caption: "Mr. New Yorker is always looking for patterns. He is a tailor for overly fitted stories." +
        "Changing perspectives would " +
        "cause enlightenment and get him fired. He is close friends with the Ad Man."

    },
    {
        name: "Fragmentation",
        path: female,
        caption: "Beauty walks a razors edge"

    },

    {
        name: "Practice",
        path: practice,
        caption: "This took a while"

    },
    {
        name: "Practice, Practice",
        path: practice2,
        caption: "This even longer"

    },
    {
        name: "Animalus",
        path: anim,
        caption: "5 minutes && Peruvian coca tea"

    },
    {
        name: "Leaving Home",
        path: leavinghome,
        caption: "I came in from the wilderness, a creature void of form. " +
        "Come in she said. I give you shelter from the storm."

    },

    {
        name: "Exploitation",
        path: exploit,
        caption: "Why stop with gestation crates and mass slaughter? Let’s use biotechnology to not only " +
        "torture but actively humiliate fellow sentient beings. Teapot camels are a solid business model"

    },
    {
        name: "Social Media",
        path: socialmedia,
        caption: "The machinery sheds light on the pathetic birds, their image distorted by the platform. 15 minutes of fame and back to the attention battery where eyeballs feed energy back into the " +
        "distortion engine. Irony isn't allowed to enter the building."
    },
    {
        name: "Circuit Physiology",
        path: circuitBody,
        caption: "The body as electric system. Explained in 'Induction' vid"
    },
    {
        name: "The Bloggersphere",
        path: bloggersphere,
        caption: "A bunch of confused parrots recursively feeding off each others' screams. They live with the " +
        "Ad Man, but Mr. New Yorker often comes by to fish for new 'insights' "

    }
];

class Illustrate extends Component {
    render() {
        return (
            <div>
                <Wrapper segment={images}/>
            </div>
        );
    }
}

export default Illustrate;
