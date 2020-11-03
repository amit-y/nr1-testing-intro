import React from 'react';
import { mount } from 'enzyme';

import Nr1TestingIntroNerdletNerdlet from './index';

describe('<Nr1TestingIntroNerdletNerdlet />', () => {
  const wrapper = mount(<Nr1TestingIntroNerdletNerdlet />);
  const h1 = wrapper.find('h1');

  test('renders the default header', () => {
    expect(h1).toHaveLength(1);
  });
});
