import React, { Component } from 'react';
import './Option.css';

/**
 * A child component for `<Options />` component that displays
 * possible phone customisation options and dispatches
 * events to the store to update phone options when clicked
 *
 * @class Option
 * @extends {Component}
 */
class Option extends Component {
  render() {
    const activeClass = this.props.active
      ? 'Option--active'
      : 'Option--inactive';

    const colorClass = this.props.color ? 'Option--color' : '';
    return (
      <li className={`Option ${activeClass} ${colorClass}`}>
        <button
          className="Option__action"
          style={{ backgroundColor: this.props.color }}
          onClick={() => this.props.action(this.props.value)}
        >
          {this.props.children}
        </button>
      </li>
    );
  }
}

export default Option;
