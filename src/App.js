import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      imput: "",
    };
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  handleClear = () => {
    this.setState({ input: "" });
  };
  render() {
    return (
      <div className="App">
        <h4>Click on textbox to see clear btn</h4>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
          className="input-control"
        />
        <button type="button" onClick={this.handleClear} className="clear">
          Clear
        </button>
      </div>
    );
  }
}

export default App;
