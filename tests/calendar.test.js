import React from 'react';
import renderer from 'react-test-renderer';

import Calendar from 'components/calendar/calendar';

jest.mock('components/calendar/month_view', () => 'month_view');
jest.mock('components/calendar/weekdays', () => 'weekdays');

let component;

describe('Calendar component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Calendar />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('onNextMonthClick updates the state', () => {
    const component = renderer.create(<Calendar />);
    const instance = component.getInstance();
    instance.setState = jest.fn();
    instance.state.date = '2018-01-01';
    const result = instance.onNextMonthClick();
    expect(instance.setState).toBeCalledWith({ date: '2018-02-01' });
  });
  it('onPrevMonthClick updates the state', () => {
    const component = renderer.create(<Calendar />);
    const instance = component.getInstance();
    instance.setState = jest.fn();
    instance.state.date = '2018-02-01';
    const result = instance.onPrevMonthClick();
    expect(instance.setState).toBeCalledWith({ date: '2018-01-01' });
  });
  it('getPerfInfoString formats correctly', () => {
    const component = renderer.create(<Calendar />);
    const instance = component.getInstance();
    instance.state.selectedDate = '2018-01-01';
    instance.state.calendarData = {};
    const time = "2.30PM";
    expect(instance.getPerfInfoString(time)).toBe("Monday 1st Jan 2018 2.30PM")
  });
  it('handleUpdateSelectedPerf update correctly', () => {
    const component = renderer.create(<Calendar />);
    const instance = component.getInstance();
    instance.setState = jest.fn();
    instance.state.date = '2018-01-01';
    const result = instance.handleUpdateSelectedPerf('2GXJ', 2, '2.30PM');
    expect(instance.setState).toBeCalledWith(
      {selectedDate: '2018-01-02'},
      expect.any(Function));
  });
});
