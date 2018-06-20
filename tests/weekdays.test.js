import React from 'react';
import renderer from 'react-test-renderer';

import Weekdays from 'components/calendar/weekdays';

let component;

describe('Weekdays component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Weekdays />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
});
