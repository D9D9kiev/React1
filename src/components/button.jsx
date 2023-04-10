import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <button
        type="button"
        className={this.props.className}
        style={{ backgroundColor: this.props.backgroundColor }}
        onClick={(e) => {
          this.props.handleClick();
        }}
      >
        {this.props.text}
      </button>
    );
  }
}
