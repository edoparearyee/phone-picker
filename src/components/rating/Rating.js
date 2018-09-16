import React, { Component } from 'react';
import Star from '../star/Star';
import './Rating.css';

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
