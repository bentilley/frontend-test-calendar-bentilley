import React from 'react';
import renderer from 'react-test-renderer';

import NumTickets from 'components/num-tickets/num-tickets';

describe('NumTickets component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<NumTickets />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
});
