import React, {Component} from 'react';
import LazyLoad from 'react-lazy-load';
import Image from './Image'
import './css/Wrapper.css';
import Button from './Button';
import Textfield from './Textfield'

const Wrapper = function (props) {
    const elements = [];
    props.segment.forEach(function (thumb) {
        elements.push(
                <div className="imageWrap">
                    <LazyLoad offsetBottom={200}>
                        <Image data={thumb}/>
                    </LazyLoad>
                    {thumb.url && <Button linkTo={thumb.url}/>}
                    <Textfield title={thumb.name} text={thumb.caption} />
                </div>
        )
    });
    return (
        <section>
            {elements.map(el => el)}

        </section>
    )
};
export default Wrapper;