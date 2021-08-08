import React from 'react';
import Input from '../../components/input/input';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    }
  }

  clearInput = (key) => {
    this.setState({ [key]: "" });
  }

  render() {
    return (
      <div>
        <Input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} name="name" clearInput={this.clearInput} />
        <Input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} name="email" clearInput={this.clearInput} />
      </div>
    )
  }
}