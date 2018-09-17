import React, { Component } from 'react';
import './Options.css';

/**
 * Parent component for `<Option />` that option name and selected value
 * as well as child `<Option \>` components.
 *
 * @class Options
 * @extends {Component}
 */
class Options extends Component {
  render() {
    return (
      <div className="Options">
        <p className="Options__state">
          {this.props.label}: <strong>{this.props.value}</strong>
        </p>
        <ul className="Options__list">{this.props.children}</ul>
      </div>
    );
  }
}

export default Options;
