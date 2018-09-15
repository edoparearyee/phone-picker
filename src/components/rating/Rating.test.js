import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './Rating';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rating />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Rating has 0 active Stars', () => {
  const component = renderer.create(<Rating value={0} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Rating has 1 active Star', () => {
  const component = renderer.create(<Rating value={1} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Rating has 2 active Stars', () => {
  const component = renderer.create(<Rating value={2} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Rating has 3 active Stars', () => {
  const component = renderer.create(<Rating value={3} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Rating has 4 active Stars', () => {
  const component = renderer.create(<Rating value={4} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Rating has 5 active Stars', () => {
  const component = renderer.create(<Rating value={5} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
