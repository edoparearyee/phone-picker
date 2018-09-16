import phonePicker, { initialState } from './phonePicker';
import * as types from '../actions/types';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(phonePicker(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_COLOUR', () => {
    expect(
      phonePicker(initialState, {
        type: types.SET_COLOUR,
        colour: '#e1e2e3'
      })
    ).toEqual({
      ...initialState,
      colourHex: '#e1e2e3',
      selectedDeviceIdx: 1
    });
  });

  it('should handle SET_MEMORY', () => {
    expect(
      phonePicker(initialState, {
        type: types.SET_MEMORY,
        memory: '256GB'
      })
    ).toEqual({
      ...initialState,
      memory: '256GB',
      selectedDeviceIdx: 3
    });
  });
});
