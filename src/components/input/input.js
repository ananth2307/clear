import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.textInput = React.createRef();
    this.handleClear = this.handleClear.bind(this);
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  handleClear = () => {
    this.props.clearInput(this.props.name);
    this.textInput.current.focus();
  };
  render() {
    console.log("inputtt", this.state.input)
    return (
      <div className="App">
        <h4>Click on textbox to see clear btn</h4>
        <input
          type="text"
          onChange={this.props.onChange}
          value={this.props.value}
          className="input-control"
          ref={this.textInput}
          // ref={(input) => { this.nameInput = input; }} 
        />
        {this.props.value &&
        <button type="button" onClick={this.handleClear} className="clear">
          Clear
        </button>}
      </div>
    );
  }
}

export default Input;
