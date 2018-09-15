import React, { Component } from 'react';
import './Option.css';

class Option extends Component {
  render() {
    const activeClass = this.props.active
      ? 'Option--active'
      : 'Option--inactive';
    return (
      <li className={`Option ${activeClass}`}>
        <div className={'Option__inner'}>{this.props.children}</div>
      </li>
    );
  }
}

export default Option;
