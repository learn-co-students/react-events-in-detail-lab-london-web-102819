import React, { Component } from "react";

export class DelayedButton extends Component {
  handleClick(event) {
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  }

  render() {
    return (
      <div>
        <button onClick={event => this.handleClick(event)}>
          DelayedButton
        </button>
      </div>
    );
  }
}

export default DelayedButton;
