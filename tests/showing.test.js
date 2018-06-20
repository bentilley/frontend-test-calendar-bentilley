import React from 'react';
import renderer from 'react-test-renderer';

import Showing from 'components/calendar/showing';

describe('Showing component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Showing
                                        time='2.30PM'
                                        minCombined='£25.05'
                                      />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
});
