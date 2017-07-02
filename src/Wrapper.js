import React, {Component} from 'react';
import LazyLoad from 'react-lazy-load';
import Image from './Image'

const Wrapper = function (props) {
    const elements = [];
    props.segment.forEach(function (thumb) {
        elements.push(
                <div>
                    {/*<a href={thumb} target="_blank" rel="noopener noreferrer">*/}
                    <LazyLoad offsetBottom={200}>
                        <Image class={props.class} src={thumb.path} name={thumb.name} caption={thumb.caption}/>
                    </LazyLoad>
                    {/*</a>*/}
                </div>
        )
    });
    return (
        <section className="flexContain">
            {elements.map(el => el)}
        </section>
    )
};
export default Wrapper;