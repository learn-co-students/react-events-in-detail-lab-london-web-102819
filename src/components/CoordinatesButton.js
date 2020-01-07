// Code CoordinatesButton Component Here

import React from 'react'

export default class CoordinatesButton extends React.Component {
    
    clickHandler = (e) => {
        let arr = []
        let x = e.clientX
        let y = e.clientY
        arr.push(x, y)
        this.props.onReceiveCoordinates(arr)
    }
    render() {
        return(
            <button onClick={this.clickHandler}> </button>
        )
    }

}