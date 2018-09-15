import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Options from './Options';
import Option from '../option/Option';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Options />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Options has options and displays value', () => {
  const component = renderer.create(
    <Options label="Capacity" value="64GB">
      <Option active={true}>64</Option>
      <Option active={false}>256</Option>
    </Options>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
