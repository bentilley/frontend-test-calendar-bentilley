import React, { Component } from 'react';
import $ from 'jquery';

import SeatingMap from './seating-map';

export default class SeatingPlan extends Component {
  constructor() {
    super();
    this.state = {
      seatingData: {}
    };
    this.getSeatingLayoutData = this.getSeatingLayoutData.bind(this);
  }

  getSeatingLayoutData() {
    let seatingUrl = 'http://localhost:5656/api/chart/' + this.props.eventId;
    $.getJSON(seatingUrl, (seatingData) => {
      this.setState({
        seatingData: seatingData
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.eventId !== this.props.eventId) {
      this.getSeatingLayoutData();
    }
    // This code was to pull the performance info into the seating plan
    // and show which seats were available, but I ran out of time and
    // wasn't sure if this was the right data set to render on the canvas

    // if (nextProps.selectedPerf !== this.props.selectedPerf) {
    //   let perfUrl = `http://localhost:5656/api/availability/${this.props.eventId}/${nextProps.selectedPerf}`
    //   $.getJSON(perfUrl, (perfData) => {
    //     // console.log(perfData);
    //   });
    // }
  }

  componentDidMount() {
    this.getSeatingLayoutData();
  }

  render() {
    if (!this.props.selectedPerf) {
      return null;
    }
    return (
      <div className="seating">
        <p>3. Select seats on the <span>interactive</span> map <i>(use a pen on the screen to circle)</i></p>
        <SeatingMap seatingData={this.state.seatingData}/>
      </div>
    );
  }
}
