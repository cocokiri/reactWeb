import React, {Component} from 'react';
import './css/Image.css';


class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    handleClick() {
        this.setState({isBig: !this.state.isBig});
        this.state.isBig ? this.setState({id: "none"}) : this.setState({id: "expanded"});
    }

    render() {
        const {path, styling, url} = this.props.data;
        return (
            <a className="normalA" href={url}>
                <img className={styling}
                     id={this.state.id}
                     src={path}
                     alt="Sketch"
                     onClick={() => this.handleClick()}>
                </img>
            </a>
        )
    }
}


export default Image;
