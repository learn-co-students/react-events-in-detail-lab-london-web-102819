// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component{
    handleMouseCoordinate = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render(){
        return(
            <button onClick={this.handleMouseCoordinate}>Mouse coord</button>
        )
    }
}

export default CoordinatesButton;