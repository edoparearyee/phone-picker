import React from 'react';
import '../styles/index.css';
import { storiesOf } from '@storybook/react';

import Star from '../app/star/Star';

storiesOf('Star', module)
  .add('Inactive', () => <Star active={false} />)
  .add('Active', () => <Star active={true} />);
