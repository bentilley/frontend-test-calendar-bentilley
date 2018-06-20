import React, { Component } from 'react';
import moment from 'moment';

import Showing from './showing';

export default class MonthView extends Component {
  constructor() {
    super();
    this.getRowList = this.getRowList.bind(this);
    this.displayRows = this.displayRows.bind(this);
    this.getDayData = this.getDayData.bind(this);
    this.handleUpdateSelectedPerf = this.handleUpdateSelectedPerf.bind(this);
  }

  displayRows() {
    const daysInMonth = moment(this.props.startDate).daysInMonth();
    let firstDayIndex = moment(this.props.startDate).day();

    /*
     The first day of the week, by default, is Sunday. We want to change it
     to Monday, and also make the index be 1-based, not 0-based
    */
    firstDayIndex -= 1;
    if (firstDayIndex < 0) {
      firstDayIndex = 6;
    }
    firstDayIndex += 1;

    /*
     We want to add empty cells before and after the days of the month,
     in order to get a proper grid. For this, we need to know what day of
     the week the month starts on
    */
    let totalCellCount = daysInMonth + firstDayIndex - 2;
    totalCellCount += 7 - totalCellCount % 7;
    const dayList = this.getDayList(totalCellCount, firstDayIndex, daysInMonth);
    const rowCount = Math.ceil(dayList.length / 7);

    /*
     We want to divide the cells into rows for easy manipulation
    */
    const rows = this.getRowList(rowCount, dayList);
    return rows;
  }

  getRowList(rowCount, dayList, startDate) {
    let rows = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(dayList.slice(i * 7, (i + 1) * 7));
    }
    rows = rows.map((rowData, rowIndex) => {
      return (
        <div className="row" key={`row-${rowIndex}`}>
          {this.displayDaysInMonth(rowData, rowIndex, startDate)}
        </div>
      );
    });
    return rows;
  }

  getDayList(cellCount, firstDayIndex, daysInMonth) {
    return Array(cellCount)
      .fill()
      .map((element, index) => {
        let dayNumber = index - firstDayIndex + 2;
        if (dayNumber < 0 || dayNumber > daysInMonth) {
          dayNumber = -1;
        }
        return dayNumber;
      });
  }

  displayDaysInMonth(rowData, rowIndex, startDate) {
    return rowData.map((dayElement, dayIndex) => {
      const content = this.getDayContent(startDate, dayElement);
      return (
        <div
          key={`${rowIndex}-${dayIndex}`}
          className={"cell" + (dayElement > 0 ? "" : " notDay")}
        >
          {content}
        </div>
      );
    });
  }

  getDayContent(startDate, day) {
    if (parseInt(day) > 0) {
      let showings = [];
      let dayData = this.getDayData(day);
      if (dayData) {
        showings = dayData.perfs.map((perf) => {
          return (<Showing
                    key={perf['perf_id']}
                    selected={this.props.selectedPerf === perf['perf_id'] ? 'selected' : ''}
                    perfId={perf['perf_id']}
                    day={day}
                    time={perf.time}
                    minCombined={perf['min_combined']}
                    updatePerfId={this.handleUpdateSelectedPerf}
                  />);
        });
      }
      return (
        <div>
          <p className={'date' + (dayData ? ' hasPerf' : '')}>{day}</p>
          <ul className='showings'>
            {showings}
          </ul>
        </div>

      );
    } else {
      return null;
    }
  }

  getDayData(day) {
    if (this.props.monthData) {
      if (this.props.monthData.days[day]) {
        return this.props.monthData.days[day];
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  handleUpdateSelectedPerf(selectedId, day, time) {
    this.props.updatePerfId(selectedId, day, time);
  }

  render() {
    const rows = this.displayRows();
    return <div className="month-view">{rows}</div>;
  }
}
