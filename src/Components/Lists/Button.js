import React, {Component} from "react";

class Button extends Component{

    open = () => {
        if (typeof this.props.openClick === "function") {
            this.props.openClick(this.props.id);
        }
    };
    render() {
        return (
            <button onClick={this.open}>Otwórz</button>
        )
    }
}

export {Button};