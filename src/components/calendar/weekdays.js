import React, { Component } from 'react';
import moment from 'moment';

export default class Weekdays extends Component {
  displayWeekdayElement(day, index) {
    const content = moment()
      .isoWeekday(index + 1)
      .format('ddd')
      .toUpperCase();
    return (
      <div key={`weekday-${index}`} className="cell">
        {content}
      </div>
    );
  }
  render() {
    const cells = Array(7)
      .fill()
      .map(this.displayWeekdayElement);
    return <div className="weekdays">{cells}</div>;
  }
}
