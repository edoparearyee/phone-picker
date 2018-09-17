import React, { Component } from 'react';
import './Price.css';

/**
 * Lists monthly and upfront costs for selected device
 *
 * @class Price
 * @extends {Component}
 */
class Price extends Component {
  render() {
    return (
      <div className="Price">
        {this.props.upfrontPrice ? (
          <div className="Price__upfront">
            <p>
              from{' '}
              <span className="Price__value">£{this.props.upfrontPrice}</span>{' '}
              upfront
            </p>
          </div>
        ) : (
          ''
        )}
        {this.props.monthPrice ? (
          <div className="Price__month">
            <p>
              when you pay{' '}
              <span className="Price__value">£{this.props.monthPrice}</span> a
              month
            </p>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Price;
