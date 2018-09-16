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
        <div
          className="Option__inner"
          style={{ backgroundColor: this.props.color }}
        >
          {this.props.children}
        </div>
      </li>
    );
  }
}

export default Option;
