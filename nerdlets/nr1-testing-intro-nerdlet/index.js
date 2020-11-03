import React from 'react';

import { Icon } from 'nr1';

import ToggleButton from '../../src/components/toggle-button';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class Nr1TestingIntroNerdletNerdlet extends React.Component {
    state = { buttonState: true };

    clickHandler = () => this.setState(state => ({
      buttonState: !state.buttonState
    }));

    render() {
        const { buttonState } = this.state;

        return (
          <div>
            <h1>Hello, nr1-testing-intro-nerdlet Nerdlet!</h1>
            <ToggleButton btnState={buttonState} onClick={this.clickHandler} />
          </div>
        );
    }
}
