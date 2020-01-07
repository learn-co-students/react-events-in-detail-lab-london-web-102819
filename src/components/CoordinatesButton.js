// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

    state = {
        onReceive: this.props.onReceiveCoordinates
    }

    handleClick = e => {
        let array = [e.clientX, e.clientY];
        this.state.onReceive(array)
    }

    render() {
        return <button onClick={this.handleClick}>Coords</button>
    }
}

export default CoordinatesButton