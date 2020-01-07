// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component{
    handleDelay = (e) => {
      e.persist();
    //   console.log (e); 
    window.setTimeout(() => {
        this.props.onDelayedClick(e)
    }, this.props.delay);
    }

    render(){
        return(
            <button onClick={this.handleDelay}>Delaying</button>
        )
    }
}

export default DelayedButton;