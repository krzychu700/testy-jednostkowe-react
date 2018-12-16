import React, { Component } from "react";

class EditPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onPlayerUpdate(this.input.value);
    this.setState({
      editing: false
    });
    this.input.value = "";
  };

  onEditing = () => {
    this.setState({
      editing: true
    });
  };

  inputValue = name => {
    if (name) {
      this.input = name;
      this.input.value = this.props.value;
    }
  };

  render() {
    if (this.state.editing) {
      return (
        <form onSubmit={this.onSubmit}>
          <input type="text" ref={name => this.inputValue(name)} />
        </form>
      );
    } else {
      return <span onClick={() => this.onEditing()}>{this.props.value}</span>;
    }
  }
}

export default EditPlayer;
