import React, { Component } from "react";
import BtnStyleWrapper from "./BtnStyleWrapper";
class Button extends Component {
  render() {
    return (
      <div>
        <button
          style={this.props.btnStyle}
          onMouseOver={this.props.mouseOverTxtChange}
          onMouseLeave={this.props.mouseLeaveTxtChange}
          onClick={this.props.changeTextColor}
        >
          {this.props.btnText}
        </button>
      </div>
    );
  }
}

export default BtnStyleWrapper(Button);
