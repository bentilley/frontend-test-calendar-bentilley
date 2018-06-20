import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/fontawesome-free-solid'
import Modal from './last-choice-modal';

export default class LastChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
      isOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectOption = this.handleSelectOption.bind(this);
  }

  toggleModal() {
    if ( this.state.isOpen ) {
      this.props.updateSelected(this.state.number);
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleClick(e) {
    this.toggleModal();
    e.preventDefault();
  }

  handleSelectOption(option) {
    this.setState({
      number: option
    }, this.toggleModal);
    // this.toggleModal();
  }

  render() {
    return (
      <div className={"choice wide" + (this.props.selected ? " selected" : "")} onClick={this.handleClick}>
        {this.state.number}
        {this.props.selected ? '' : '+'}
        <FontAwesomeIcon icon={faAngleDown} />

        <Modal
          number={this.props.number}
          show={this.state.isOpen}
          onClose={this.toggleModal}
          currentSelection={this.props.currentSelection}
          selectOption={this.handleSelectOption}
          numAdditionalOptions={this.props.numAdditionalOptions}
        />
      </div>
    );
  }
}
