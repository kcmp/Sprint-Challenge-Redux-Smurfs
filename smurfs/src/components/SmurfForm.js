import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      height: '',
      age: ''
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, age, height } = this.state;
    const { handleAddSmurf } = this.props;
    return (
      <form onSubmit={e => handleAddSmurf({ name, age, height }, e)}>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Enter name..."
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          value={height}
          name="height"
          placeholder="Enter height..."
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          value={age}
          name="age"
          placeholder="Enter age..."
          onChange={this.handleInputChange}
        />
        <button type="submit">Add Smurf</button>
      </form>
    );
  }
}

export default SmurfForm;