import React, {Component} from 'react';
import './css/Image.css';
import Button from './Button';
import Textfield from './Textfield'

class Image extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {};
    }

    handleClick() {
        this.setState({isBig: !this.state.isBig});
        this.state.isBig ? this.setState({id: "none"}) : this.setState({id: "expanded"});
    }

    render() {
        return (
            <section className="imageWrap">
                <img className={this.props.class}
                     id={this.state.id}
                     src={this.props.src}
                     alt="Sketch"
                     onClick={() => this.handleClick()} >
                </img>
                {this.props.linkTo && <Button linkTo={this.props.linkTo}/>}
                <Textfield title={this.props.name} text={this.props.caption} />
            </section>
        )
    }
}


export default Image;
