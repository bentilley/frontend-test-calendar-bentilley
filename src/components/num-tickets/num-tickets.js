import React, { Component } from 'react';
import Choice from './choice';
import LastChoice from './last-choice';

export default class NumTickets extends Component {
  constructor() {
    super();
    this.settings = {
      maxChoices: 10,
      numShownChoices: 6
    }
    this.handleUpdateSelection = this.handleUpdateSelection.bind(this);
  }

  handleUpdateSelection(number) {
    this.props.updateTicketNumber(number);
  }

  render() {
    let numShownChoices = this.settings.numShownChoices;
    let maxChoices = this.settings.maxChoices;
    let numTickets = this.props.numTickets;
    const choices = [];
    for ( var i = 1; i <= numShownChoices - 1; i++) {
      choices.push(<Choice
                      key={ `choice-${i}` }
                      number={ i }
                      selected={ numTickets === i ? true : false }
                      updateSelected={ this.handleUpdateSelection }
                    />);
    }
    choices.push(<LastChoice
                    key={`choice-${numShownChoices}`}
                    number={i}
                    currentSelection={numTickets}
                    selected={ numTickets >= numShownChoices ? true : false }
                    updateSelected={ this.handleUpdateSelection }
                    numAdditionalOptions={maxChoices - numShownChoices}
                    />)

    return (<div className="num-tickets">
              <p>1. Choose number of tickets</p>
              <div className="num-tickets-container">
                {choices}
              </div>
            </div>);
  }
}
