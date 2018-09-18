import React, { Component } from 'react';

import './Main.css';
import Rating from '../rating/Rating';
import Options from '../options/Options';
import Price from '../price/Price';
import Option from '../option/Option';
import { load, loadFail, loadSuccess } from '../../actions';

/**
 * Main entry component for app
 *
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
  /**
   * Load data from json file using fetch API and dispatch actions
   * when on success or failure
   */
  loadPhonesData() {
    const { dispatch } = this.props;
    dispatch(load());
    fetch('/data/phones.json')
      .then(res => res.json())
      .then(phones => dispatch(loadSuccess(phones)))
      .catch(() => dispatch(loadFail()));
  }

  /**
   * Fetch data once component is loaded in the DOM
   */
  componentDidMount() {
    this.loadPhonesData();
  }

  render() {
    const {
      phone,
      selectedColour,
      selectedMemory,
      selectedDevice,
      colourOptions,
      memoryOptions,
      loading,
      loadFailed,
      actions
    } = this.props;

    let content;

    if (loading) {
      // display loading message while data is requested
      content = <p className="Main__message">loading…</p>;
    } else if (loadFailed) {
      // display error message if request fails
      content = (
        <p className="Main__message">
          Sorry there was an error loading this page
        </p>
      );
    } else {
      // display phone data once data is loaded
      content = (
        <article className="Product">
          <figure className="Product__gallery">
            <img
              className="Product__image"
              src={selectedDevice.merchandisingMedia[0].value}
              alt={selectedDevice.displayDescription}
            />
          </figure>

          <section className="Product__summary">
            <h1 className="Product__name">{phone.groupName}</h1>
            <Rating value={phone.rating} />
            <p className="Product__description">
              {selectedDevice.displayDescription}
            </p>

            <ul className="Product__options">
              <li className="Product__optionsItem Product__optionsColour">
                <Options label="Colour" value={selectedColour.colourName}>
                  {colourOptions.map(colour => (
                    <Option
                      active={selectedColour.colourHex === colour.colourHex}
                      color={colour.colourHex}
                      key={colour.colourHex}
                      value={colour}
                      action={actions.setColour}
                    >
                      <span className="Product__optionsColourName">
                        {colour.colourName}
                      </span>
                    </Option>
                  ))}
                </Options>
              </li>

              <li className="Product__optionsItem Product__optionsCapacity">
                <Options label="Capacity" value={selectedMemory}>
                  {memoryOptions.map(memory => (
                    <Option
                      active={selectedMemory === memory}
                      key={memory}
                      value={memory}
                      action={actions.setMemory}
                    >
                      {memory.slice(0, memory.length - 2)}
                    </Option>
                  ))}
                </Options>
              </li>
            </ul>

            <Price
              monthPrice={
                selectedDevice.priceInfo.bundlePrice.monthlyPrice.gross
              }
              upfrontPrice={
                selectedDevice.priceInfo.hardwarePrice.oneOffPrice.gross
              }
            />
          </section>
        </article>
      );
    }
    return (
      <main
        className={'Main' + (loading || loadFailed ? ' Main--hasMessage' : '')}
      >
        {content}
      </main>
    );
  }
}

export default Main;
