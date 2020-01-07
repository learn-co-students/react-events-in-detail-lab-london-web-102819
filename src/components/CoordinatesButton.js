// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClick(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <div>
        <button onClick={event => this.handleClick(event)}>
          CoordinatesButton
        </button>
      </div>
    );
  }
}

export default CoordinatesButton;
