import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import * as phones from '../../phones.json';
import Main from './Main';

const phone = phones[0];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Main
      phone={phone}
      selectedDevice={phone.deviceSummary[0]}
      selectedColour={{ colourHex: '#f8e7dc', colourName: 'Gold' }}
      selectedMemory={'64GB'}
      memoryOptions={['64GB', '256GB']}
      colourOptions={[
        { colourHex: '#f8e7dc', colourName: 'Gold' },
        { colourHex: '#e1e2e3', colourName: 'Silver' },
        { colourHex: '#232324', colourName: 'Space Grey' }
      ]}
      actions={{
        setColour: value => console.log('setColour', value),
        setMemory: value => console.log('setMemory', value)
      }}
      dispatch={fn => null}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test('Main displays loading message', () => {
  const component = renderer.create(
    <Main
      loading={true}
      loadFailed={false}
      phone={null}
      selectedDevice={null}
      selectedColour={null}
      selectedMemory={null}
      memoryOptions={null}
      colourOptions={null}
      actions={{
        setColour: value => console.log('setColour', value),
        setMemory: value => console.log('setMemory', value)
      }}
      dispatch={fn => null}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Main displays phone information', () => {
  const component = renderer.create(
    <Main
      loading={false}
      loadFailed={false}
      phone={phone}
      selectedDevice={phone.deviceSummary[0]}
      selectedColour={{ colourHex: '#f8e7dc', colourName: 'Gold' }}
      selectedMemory={'64GB'}
      memoryOptions={['64GB', '256GB']}
      colourOptions={[
        { colourHex: '#f8e7dc', colourName: 'Gold' },
        { colourHex: '#e1e2e3', colourName: 'Silver' },
        { colourHex: '#232324', colourName: 'Space Grey' }
      ]}
      actions={{
        setColour: value => console.log('setColour', value),
        setMemory: value => console.log('setMemory', value)
      }}
      dispatch={fn => null}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Main displays error information', () => {
  const component = renderer.create(
    <Main
      loading={false}
      loadFailed={true}
      phone={null}
      selectedDevice={null}
      selectedColour={null}
      selectedMemory={null}
      memoryOptions={null}
      colourOptions={null}
      actions={{
        setColour: value => console.log('setColour', value),
        setMemory: value => console.log('setMemory', value)
      }}
      dispatch={fn => null}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
