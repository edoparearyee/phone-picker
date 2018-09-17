import React, { Component } from 'react';

import Star from '../star/Star';
import './Rating.css';

/**
 * Displays list of `<Star />` components setting a
 * number of stars that match the `value` prop
 *
 * @class Rating
 * @extends {Component}
 */
class Rating extends Component {
  render() {
    const stars = [0, 1, 2, 3, 4].map(i => (
      <li className="StarList--item" key={i}>
        <Star active={i < this.props.value} />
      </li>
    ));
    return <ul className="StarList">{stars}</ul>;
  }
}

export default Rating;
