import React from 'react';
import { render } from 'enzyme';

import Nr1TestingIntroNerdletNerdlet from './index';

describe('<Nr1TestingIntroNerdletNerdlet />', () => {
  const wrapper = render(<Nr1TestingIntroNerdletNerdlet />);

  test('matches the index page snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
