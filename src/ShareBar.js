import React from 'react';
import './css/Button.css';
import './css/Image.css';

import { ShareButtons, generateShareIcon} from 'react-share';

const {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const WhatsappIcon = generateShareIcon('whatsapp');
const TwitterIcon = generateShareIcon('twitter');

const myUrl = "https://dacapo.io";

const shareBarStyle = {
    padding: "0.2em",
    paddingLeft: "0.4em",
    display: "flex",
    alignItems: "left",
    alignSelf: "left"
}

const ShareBar = function (props) {
    return (
        <div style={shareBarStyle}>
            <FacebookShareButton url={myUrl}>
                <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            <WhatsappShareButton url={myUrl}>
                <WhatsappIcon size={32} round={true}/>
            </WhatsappShareButton>
            <TwitterShareButton url={myUrl}>
                <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
        </div>
    )
};

export default ShareBar;