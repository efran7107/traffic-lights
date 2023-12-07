import React, { Component } from "react";

export class ClassTrafficLight extends Component {
  lights: Array<string> = ["black", "green", "yellow", "red"];

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
              this.state.light === 3 ? this.lights[3] : this.lights[0]
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.light === 2 ? this.lights[2] : this.lights[0]
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.light === 1 ? this.lights[1] : this.lights[0]
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
