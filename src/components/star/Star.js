import React, { Component } from 'react';
import './Star.css';

class Star extends Component {
  render() {
    return (
      <svg
        className={`Star ${
          this.props.active ? 'Star--active' : 'Star--inactive'
        }`}
      >
        <polygon
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          style={{ fillRule: 'nonzero' }}
        />
      </svg>
    );
  }
}

export default Star;
