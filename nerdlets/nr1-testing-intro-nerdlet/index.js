import React from 'react';

import { Icon } from 'nr1';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class Nr1TestingIntroNerdletNerdlet extends React.Component {
    render() {
        return (
          <div>
            <h1>Hello, nr1-testing-intro-nerdlet Nerdlet!</h1>
            <Icon type={Icon.TYPE.HARDWARE_AND_SOFTWARE__SOFTWARE__PLUGIN__S_OK} />
          </div>
        );
    }
}
