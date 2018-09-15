import React from 'react';
import { storiesOf } from '@storybook/react';
import '../styles/index.css';

import Star from '../components/star/Star';
import Rating from '../components/rating/Rating';
import Option from '../components/option/Option';

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
  .add('Active and with content', () => <Option active={true}>64</Option>);
