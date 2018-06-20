import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTimes, faCircle, faDotCircle } from '@fortawesome/fontawesome-free-solid'

export default class LastChoiceModal extends Component {
  constructor() {
    super();
    this.createOption = this.createOption.bind(this);
  }

  handleOptionClick(number, e) {
    e.stopPropagation();
    this.props.selectOption(number);
    e.preventDefault();
  }

  createOption(number) {
    return (
      <li
        key={number}
        className={(number === this.props.currentSelection) ? 'selected' : ''}
        onClick={this.handleOptionClick.bind(this, number)}
      >
      <FontAwesomeIcon icon={(number === this.props.currentSelection) ? faDotCircle : faCircle}/>
      {number}
    </li>
    );
  }

  render() {
      if(!this.props.show) {
        return null;
      }

      const modalChoices = Array(this.props.numAdditionalOptions + 1)
        .fill()
        .map((elem, index) => {
          let option = index + this.props.number;
          return this.createOption(option);
        });

      return (
        <div className="backdrop">
          <div className="modal">
            <div className="header">
              <h2>Choose number of tickets</h2>
              <button onClick={this.props.onClose}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="choices-list">
              <ul>
                {modalChoices}
              </ul>
            </div>
          </div>
        </div>
      );
    }

}
