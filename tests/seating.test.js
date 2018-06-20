import React from 'react';
import renderer from 'react-test-renderer';

import Seating from 'components/seating/seating';

describe('Seating component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Seating />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
});
