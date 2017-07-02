import React, {Component} from 'react';
import './css/Image.css';
import NameField from "./NameField";
import ImageCaption from "./ImageCaption";

class Image extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {};
        this.myname = props.name ? <NameField name={props.name}/> : "";
        this.mycaption = props.caption ? <ImageCaption caption={props.caption}/> : "";
    }
    textfield(name, caption) {
        if (name && !caption) {
            return name;
        }
        if (caption) {
            return (
                <div className="textfield">
                    {name}
                    {caption}
                </div>
            );
        }
    }

    handleClick() {
        this.setState({isBig: !this.state.isBig});

        this.state.isBig ? this.setState({id: "none"}) : this.setState({id: "expanded"});
    }

    render() {
        return (
            <section className="imageWrap">
                <img className={this.props.class} id={this.state.id} src={this.props.src}
                     onClick={() => this.handleClick()}
                     alt="Sketch">
                </img>
                {this.textfield(this.myname, this.mycaption)}
            </section>
        )
    }
}

export default Image;
