import React, {Component} from 'react';
import LazyLoad from 'react-lazy-load';
import Image from './Image'

const Wrapper = function (props) {
    const elements = [];
    props.segment.forEach(function (thumb) {
        elements.push(
                <section className="imageWrap">
                    {/*<a href={thumb} target="_blank" rel="noopener noreferrer">*/}
                    <LazyLoad offsetBottom={200}>
                        <Image size={props.size} src={thumb} alt="Sketch"/>
                    </LazyLoad>
                    {/*</a>*/}
                </section>
        )
    });
    return (
        <section className="flexContain">
            {elements.map(el => el)}
        </section>
    )
};
export default Wrapper;