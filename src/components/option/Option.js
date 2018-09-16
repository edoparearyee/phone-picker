import React, { Component } from 'react';
import './Option.css';

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
