import React from 'react';
import renderer from 'react-test-renderer';

import MonthView from 'components/calendar/month_view';

let component;

describe('MonthView component', () => {
  it('renders correctly for 2018-01-01', () => {
    const component = renderer.create(<MonthView startDate={'2018-01-01'} />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renders correctly for 2018-02-01', () => {
    const component = renderer.create(<MonthView startDate={'2018-02-01'} />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renders correctly for 2018-03-01', () => {
    const component = renderer.create(<MonthView startDate={'2018-03-01'} />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renders correctly for 2018-04-01', () => {
    const component = renderer.create(<MonthView startDate={'2018-04-01'} />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renders correctly for 2018-05-01', () => {
    const component = renderer.create(<MonthView startDate={'2018-05-01'} />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renders correctly for 2018-06-01', () => {
    const component = renderer.create(<MonthView startDate={'2018-06-01'} />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renders correctly for 2018-06-01', () => {
    const component = renderer.create(<MonthView startDate={'2018-06-01'} />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renders correctly for 2018-07-01', () => {
    const component = renderer.create(<MonthView startDate={'2018-07-01'} />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renders correctly for 2018-08-01', () => {
    const component = renderer.create(<MonthView startDate={'2018-08-01'} />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renders correctly for 2018-09-01', () => {
    const component = renderer.create(<MonthView startDate={'2018-09-01'} />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renders correctly for 2018-10-01', () => {
    const component = renderer.create(<MonthView startDate={'2018-10-01'} />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renders correctly for 2018-11-01', () => {
    const component = renderer.create(<MonthView startDate={'2018-11-01'} />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renders correctly for 2018-12-01', () => {
    const component = renderer.create(<MonthView startDate={'2018-12-01'} />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
});
