import React, { Component } from 'react';

export default class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number
    };
  }

  handleClick(e) {
    this.props.updateSelected(this.state.number);
    e.preventDefault();
  }

  render() {
    return (
      <div className={"choice" + (this.props.selected ? " selected" : "")} onClick={this.handleClick.bind(this)}>
        {this.props.number}
      </div>
    );
  }
}
