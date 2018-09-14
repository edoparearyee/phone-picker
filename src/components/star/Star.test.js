import React from 'react';
import ReactDOM from 'react-dom';
import Star from './Star';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Star />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Star has class Star-inactive', () => {
  const component = renderer.create(<Star active={false} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Star has class Star-active', () => {
  const component = renderer.create(<Star active={true} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
