import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Main from './Main';
import phones from '../../phones.json';

const phone = phones[0];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
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
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test('Main displays state data', () => {
  const component = renderer.create(
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
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
