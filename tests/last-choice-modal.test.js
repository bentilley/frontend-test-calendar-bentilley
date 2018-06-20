import React from 'react';
import renderer from 'react-test-renderer';

import LastChoiceModal from 'components/num-tickets/last-choice-modal';

describe('Showing component', () => {
  it('renders correctly: nothing selected', () => {
    const component = renderer.create(<LastChoiceModal
                                        number={6}
                                        numAdditionalOptions={4}
                                      />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renders correctly: one selected', () => {
    const component = renderer.create(<LastChoiceModal
                                        number={6}
                                        numAdditionalOptions={4}
                                        currentSelection={7}
                                      />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
});
