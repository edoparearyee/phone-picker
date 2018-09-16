import React, { Component } from 'react';
import './Price.css';

class Price extends Component {
  render() {
    const singlePrice = !this.props.monthPrice || !this.props.fullPrice;
    return (
      <div className={`Price ${singlePrice ? 'Price--single' : ''}`}>
        {this.props.fullPrice ? (
          <div className="Price__full">
            <p>
              from <span className="Price__value">£{this.props.fullPrice}</span>{' '}
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
