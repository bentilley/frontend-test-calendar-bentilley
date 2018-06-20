import React from 'react';
import renderer from 'react-test-renderer';

import App from 'components/app/app';

jest.mock('components/calendar/calendar', () => 'calendar');

let component;

describe('App component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<App />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
});
