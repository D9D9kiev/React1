import React from "react";
import { Button } from "./button";

export class Modal extends React.Component {
  render() {
    return (
      <div
        className="wrapper"
        onClick={() => {
          this.props.onClose();
        }}
      >
        <div
          className={this.props.className}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <header className={`${this.props.className}__header`}>
            <h1 className={`${this.props.className}__title`}>
              {this.props.header}
            </h1>
            <Button
              className={`${this.props.className}__close`}
              text="X"
              handleClick={(e) => {
                this.props.onClose();
              }}
            />
          </header>
          <p className={`${this.props.className}__text`}>{this.props.text}</p>
          {this.props.actions}
        </div>
      </div>
    );
  }
}
