import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      isButton: false
    };
  }
  handleChange = (e) => {
    debugger
    this.setState({ input: e.target.value }, () => {
      if(this.state.input !== "")
        this.setState({ isButton: true })
    });
  };
  handleClear = () => {
    this.setState({ input: "" });
  };
  handleBlur = (e) => {
    debugger
    if(e.relatedTarget !== null && e.relatedTarget.localName === "button")
    {
    this.handleClear();
    this.setState({ isButton: false })
    }
    else
    this.setState({ isButton: false })
  }
  render() {
    return (
      <div className="App">
        <h4>Click on textbox to see clear btn</h4>
        <input
          type="text"
          value={this.state.input}
          className="input-control"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        <button type="button" style={{display: this.state.isButton !== false ? "block": "none"}} onClick={this.handleClear} >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
