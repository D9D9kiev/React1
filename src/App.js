import React from "react";
import "./App.css";
import { Button } from "./components/button.jsx";
import { Modal } from "./components/modal.jsx";
import "./scss/reset.scss";
import "./scss/style.scss";

class App extends React.Component {
  state = { isModalVisibleFirst: false, isModalVisibleSecond: false };
  render() {
    return (
      <div className="App">
        <Button
          text="Open first modal"
          backgroundColor="red"
          className="button-open-modal"
          handleClick={() => {
            this.setState({ ...this.state, isModalVisibleFirst: true });
          }}
        />
        <Button
          text="Open second modal"
          backgroundColor="green"
          className="button-open-modal"
          handleClick={() => {
            this.setState({ ...this.state, isModalVisibleSecond: true });
          }}
        />
        {this.state.isModalVisibleFirst && (
          <Modal
            className="modal-first"
            header="Do you want delete this file?"
            text={`Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it? `}
            onClose={() =>
              this.setState({ ...this.state, isModalVisibleFirst: false })
            }
            actions={
              <div>
                <Button
                  text="Ok"
                  handleClick={() => {
                    console.log(true);
                    this.setState({
                      ...this.state,
                      isModalVisibleFirst: false,
                    });
                  }}
                />
                <Button
                  text="Close"
                  handleClick={() => {
                    console.log(false);
                    this.setState({
                      ...this.state,
                      isModalVisibleFirst: false,
                    });
                  }}
                />
              </div>
            }
          />
        )}

        {this.state.isModalVisibleSecond && (
          <Modal
            className="modal-second"
            header="Download this file"
            text="Are you sure?"
            onClose={() =>
              this.setState({ ...this.state, isModalVisibleSecond: false })
            }
            actions={
              <div>
                <Button
                  text="Yes"
                  handleClick={() => {
                    console.log(true);
                    this.setState({
                      ...this.state,
                      isModalVisibleSecond: false,
                    });
                  }}
                />
                <Button
                  text="No"
                  handleClick={() => {
                    console.log(false);
                    this.setState({
                      ...this.state,
                      isModalVisibleSecond: false,
                    });
                  }}
                />
              </div>
            }
          />
        )}
      </div>
    );
  }
}

export default App;
