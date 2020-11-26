import React, { Component } from "react";

const BtnStyleWrapper = (OriginalCompoment) => {
  //   Returning new Updated component
  class NewCompoenet extends Component {
    constructor(props) {
      super(props);

      this.state = {
        btnText: "Mouse Out",
        color: "black",
      };
    }

    //Change Button on mouse over
    mouseOverTxtChange = (props) => {
      this.setState({ btnText: "Mouse Over" });
    };

    //Change Button on mouse leave text
    mouseLeaveTxtChange = () => {
      this.setState({ btnText: "Mouse Out" });
    };

    // Change  button Text color
    changeTextColor = () => {
      this.setState({ color: "red" });
    };

    render() {
      const { btnText, color } = this.state;
      return (
        <OriginalCompoment
          btnText={btnText}
          btnStyle={{ color }}
          changeTextColor={this.changeTextColor}
          mouseLeaveTxtChange={this.mouseLeaveTxtChange}
          mouseOverTxtChange={this.mouseOverTxtChange}
        />
      );
    }
  }

  return NewCompoenet;
};

export default BtnStyleWrapper;
