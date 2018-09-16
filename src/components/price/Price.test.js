import React from 'react';
import ReactDOM from 'react-dom';
import Price from './Price';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Price />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Price has month and full prices', () => {
  const component = renderer.create(
    <Price monthPrice={43.2} fullPrice={1149} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Price has only monthly price', () => {
  const component = renderer.create(<Price monthPrice={43.2} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Price has only full price', () => {
  const component = renderer.create(<Price fullPrice={1149} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
