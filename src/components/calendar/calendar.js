import React, { Component } from 'react';
import moment from 'moment';
import $ from 'jquery';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid'

import Weekdays from './weekdays';
import MonthView from './month_view';

export default class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      date: moment().format('2018-06-01'),
      selectedDate: null,
      calendarData: null
    };
    this.monthData = this.monthData.bind(this);
    this.onNextMonthClick = this.onNextMonthClick.bind(this);
    this.onPrevMonthClick = this.onPrevMonthClick.bind(this);
    this.handleUpdateSelectedPerf = this.handleUpdateSelectedPerf.bind(this);
    this.getPerfInfoString = this.getPerfInfoString.bind(this);
  }

  onNextMonthClick() {
    let newDate = moment(this.state.date).add(1, 'M');
    this.setState({ date: newDate.format('YYYY-MM-DD') });
  }
  onPrevMonthClick() {
    let newDate = moment(this.state.date).subtract(1, 'M');
    this.setState({ date: newDate.format('YYYY-MM-DD') });
  }

  getEventData() {
    let url = 'http://localhost:5656/api/calendar/' + this.props.eventId;
    $.getJSON(url, (data) => {
      this.setState({
        calendarData: data,
      });
    });
  }

  componentDidMount() {
    this.getEventData();
  }

  monthData() {
    let data = this.state.calendarData;
    if (data) {
      let date = moment(this.state.date);
      return data.years[date.year()].months[(date.month() + 1)];
    } else {
      return null;
    }
  }

  handleUpdateSelectedPerf(perfId, day, time) {
    let date = moment(this.state.date);
    let newDate = moment([date.year(), date.month(), day]);
    this.setState({
      selectedDate: newDate.format('YYYY-MM-DD')
    }, () => {
      this.props.updatePerfId(perfId, this.getPerfInfoString(time));
    });
  }

  getPerfInfoString(time) {
    if (this.state.calendarData) {
      let date = moment(this.state.selectedDate);
      let infoString = date.format('dddd Do MMM YYYY');
      return infoString + " " + time;
    } else {
      return null
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="calendar">
        <p>2. Choose a date</p>
        <div className="controls-wrapper">
          <div className="controls">
            <button onClick={this.onPrevMonthClick}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <p>{moment(this.state.date).format('MMMM YYYY')}</p>
            <button onClick={this.onNextMonthClick}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
        <Weekdays />
        <MonthView
          startDate={this.state.date}
          monthData={this.monthData()}
          selectedPerf={this.props.selectedPerf}
          updatePerfId={this.handleUpdateSelectedPerf}
        />
      </div>
    );
  }
}
