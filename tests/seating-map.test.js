import React from 'react';
import renderer from 'react-test-renderer';

import SeatingMap from 'components/seating/seating-map';

const seatingData = {
  'seats': {
    'seat': {
      x: 5,
      y: 5
    }
  },
  'text-elements' : [
    {
      x: 10,
      y: 10,
      content: "STAGE",
      size: 16
    }
  ],
  'shapes': [
    {
      x: 15,
      y: 15,
      width: 20,
      height: 20
    }
  ]
};

describe('Seating component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<SeatingMap />);
    const instance = component.getInstance();
    const result = instance.render();
    expect(result).toMatchSnapshot();
  });
  it('renderPlan calls subfuncs correctly', () => {
    const component = renderer.create(
      <SeatingMap
      />);
    const instance = component.getInstance();
    instance.renderSeat = jest.fn();
    instance.renderText = jest.fn();
    instance.renderShape = jest.fn();
    instance.renderPlan({}, seatingData);
    expect(instance.renderSeat).toBeCalledWith(expect.anything(), 5, 5, '#ccc');
    expect(instance.renderText).toBeCalledWith(expect.anything(), 10, 10, 'STAGE', 16, '#444');
    expect(instance.renderShape).toBeCalledWith(expect.anything(), 15, 15, 20, 20, '#444');
  });
});
