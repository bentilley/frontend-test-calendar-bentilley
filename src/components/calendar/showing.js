import React, { Component } from 'react';

export default class Showing extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.updatePerfId(this.props.perfId, this.props.day, this.props.time);
    e.preventDefault()
  }

  render() {
    return (
      <li className={`showing ${this.props.selected}`} onClick={this.handleClick}>
        <h3>{this.props.time}</h3>
        <p>£{this.props.minCombined}</p>
      </li>
    );
  }
}
