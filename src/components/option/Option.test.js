import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Option />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Option has class Option--inactive', () => {
  const component = renderer.create(<Option active={false} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Option has class Option--active', () => {
  const component = renderer.create(<Option active={true} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Option has class Option--inactive and content', () => {
  const component = renderer.create(<Option active={false}>64</Option>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Option has class Option--active and content', () => {
  const component = renderer.create(<Option active={true}>64</Option>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
