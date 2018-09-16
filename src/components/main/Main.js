import React from 'react';
import './Main.css';
import Rating from '../rating/Rating';
import Options from '../options/Options';
import Option from '../option/Option';
import Price from '../price/Price';

const Main = ({
  selectedColour,
  selectedMemory,
  phone,
  selectedDevice,
  colourOptions,
  memoryOptions,
  actions
}) => (
  <main className="Main">
    <div className="Main__productGallery">
      <img
        className="Main__productImage"
        src={selectedDevice.merchandisingMedia[0].value}
        alt={selectedDevice.displayDescription}
      />
    </div>
    <div className="Main__productSummary">
      <h1 className="Main__productName">{phone.groupName}</h1>
      <Rating value={phone.rating} />
      <p className="Main__description">{selectedDevice.displayDescription}</p>

      <ul className="Main__options">
        <li className="Main__optionsItem">
          <Options label="Colour" value={selectedDevice.colourName}>
            {colourOptions.map(colourHex => (
              <Option
                active={selectedColour === colourHex}
                color={colourHex}
                key={colourHex}
                value={colourHex}
                action={actions.setColour}
              />
            ))}
          </Options>
        </li>
        <li className="Main__optionsItem">
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
        monthPrice={selectedDevice.priceInfo.bundlePrice.monthlyPrice.gross}
        upfrontPrice={selectedDevice.priceInfo.hardwarePrice.oneOffPrice.gross}
      />
    </div>
  </main>
);

export default Main;
