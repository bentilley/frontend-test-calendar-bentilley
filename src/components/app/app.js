import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/fontawesome-free-solid'
import $ from 'jquery';

import NumTickets from '../num-tickets/num-tickets';
import Calendar from '../calendar/calendar';
import Seating from '../seating/seating';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      eventId: '2GXJ',
      numberOfTickets: 0,
      selectedPerf: '',
      perfInfoString: null
    }
    this.handleUpdateTicketNumber = this.handleUpdateTicketNumber.bind(this);
    this.handleUpdateSelectedPerf= this.handleUpdateSelectedPerf.bind(this);
    // this.getPerfInfo = this.getPerfInfo.bind(this);
  }

  handleUpdateTicketNumber(number) {
    this.setState({
      numberOfTickets: number
    });
  }

  handleUpdateSelectedPerf(perfId, perfInfoString) {
    this.setState({
      selectedPerf: perfId,
      perfInfoString: perfInfoString
    });
  }

  // getPerfInfo() {
  //   let perfUrl = 'http://localhost:5656/api/availability/'
  //   perfUrl += this.state.eventId + '/' + this.state.selectedPerf;
  //   $.getJSON(perfUrl, (perfData) => {
  //     console.log(perfData);
  //   });
  // }

  render() {
    return (
      <main>
        <div id="header">
          <h1>Wicked</h1>
          <p>
            {this.state.perfInfoString ? (<FontAwesomeIcon icon={faCalendarAlt} />) : null}
            {this.state.perfInfoString ? this.state.perfInfoString : ""}
          </p>
        </div>
        <div className="main-content">
          <div id="calendar-container">
            <NumTickets
              numTickets={this.state.numberOfTickets}
              updateTicketNumber={this.handleUpdateTicketNumber}
            />
            <Calendar
              show={this.state.numberOfTickets}
              eventId={this.state.eventId}
              selectedPerf={this.state.selectedPerf}
              updatePerfId={this.handleUpdateSelectedPerf}
            />
          </div>
          <div id="plan-container" >
            <Seating
              eventId={this.state.eventId}
              selectedPerf={this.state.selectedPerf}
            />
          </div>
        </div>
      </main>
    );
  }
}
