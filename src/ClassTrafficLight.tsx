import React, { Component } from "react";

type Color = "red" | "yellow" | "green" | "black";

type State = {
  light: number;
};

export class ClassTrafficLight extends Component<Record<never, never>, State> {
  state = {
    light: 1,
  };

  changeLight: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (this.state.light === 3) this.setState({ light: 1 });
    else this.setState({ light: this.state.light + 1 });
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={`circle ${
              (this.state.light === 3 ? "red" : "black") satisfies Color
            }`}
          ></div>
          <div
            className={`circle ${
              (this.state.light === 2 ? "yellow" : "black") satisfies Color
            }`}
          ></div>
          <div
            className={`circle ${
              (this.state.light === 1 ? "green" : "black") satisfies Color
            }`}
          ></div>
        </div>
        <button className="next-state-button" onClick={this.changeLight}>
          Next State
        </button>
      </div>
    );
  }
}
