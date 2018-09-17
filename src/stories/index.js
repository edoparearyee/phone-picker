import React from 'react';
import { storiesOf } from '@storybook/react';
import '../styles/index.css';

import phones from '../../public/data/phones.json';

import Star from '../components/star/Star';
import Rating from '../components/rating/Rating';
import Option from '../components/option/Option';
import Options from '../components/options/Options';
import Price from '../components/price/Price';
import Main from '../components/main/Main';

const phone = phones[0];

storiesOf('Star', module)
  .add('Inactive', () => <Star active={false} />)
  .add('Active', () => <Star active={true} />);

storiesOf('Rating', module)
  .add('0 stars', () => <Rating value={0} />)
  .add('1 star', () => <Rating value={1} />)
  .add('2 stars', () => <Rating value={2} />)
  .add('3 stars', () => <Rating value={3} />)
  .add('4 stars', () => <Rating value={4} />)
  .add('5 stars', () => <Rating value={5} />);

storiesOf('Option', module)
  .add('Inactive', () => <Option active={false} />)
  .add('Active', () => <Option active={true} />)
  .add('With content', () => <Option active={false}>64</Option>)
  .add('Active and with content', () => <Option active={true}>64</Option>)
  .add('Custom color', () => <Option active={false} color="#f8e7dc" />)
  .add('Active and custom color', () => (
    <Option active={true} color="#f8e7dc" />
  ));

storiesOf('Options', module).add('With options and selected value', () => (
  <Options label="Capacity" value="64GB">
    <Option active={true}>64</Option>
    <Option active={false}>256</Option>
  </Options>
));

storiesOf('Price', module)
  .add('Only monthly price', () => <Price monthPrice="43.20" />)
  .add('Only upfront price', () => <Price upfrontPrice="43.20" />)
  .add('Month price and upfront price', () => (
    <Price monthPrice="43.20" upfrontPrice="1149" />
  ));

storiesOf('Main', module).add('Default', () => (
  <Main
    phone={phone}
    selectedDevice={phone.deviceSummary[0]}
    selectedColour={'#f8e7dc'}
    selectedMemory={'64GB'}
    memoryOptions={['64GB', '256GB']}
    colourOptions={['#f8e7dc', '#e1e2e3', '#232324']}
    actions={{
      setColour: value => console.log('setColour', value),
      setMemory: value => console.log('setMemory', value)
    }}
  />
));
