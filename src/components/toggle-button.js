import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'nr1';

export default class ToggleButton extends React.Component {
  static propTypes = {
    btnState: PropTypes.bool,
    onClick: PropTypes.func,
  };

  render() {
    const { btnState, onClick } = this.props;

    return (
      <Button onClick={onClick}>
        {btnState ? 'Off' : 'On'}
      </Button>
    );
  }
}
