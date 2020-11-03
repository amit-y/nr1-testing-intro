import React from 'react';
import { mount } from 'enzyme';

import ToggleButton from './toggle-button';

describe('<ToggleButton />', () => {
  test('renders a button element', () => {
    const wrapper = mount(<ToggleButton />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  test('onClick fn is called when button is clicked', () => {
    const mockOnClick = jest.fn();
    const wrapper = mount(<ToggleButton onClick={mockOnClick} />);
    wrapper.find('button').simulate('click');
    expect(mockOnClick.mock.calls.length).toBe(1);
  });
});
