import phonePicker, { initialState } from './phonePicker';
import * as types from '../actions/types';
import phones from '../phones.json';

const phone = phones[0];
const testState = {
  ...initialState,
  phone,
  colourHex: '#f8e7dc',
  memory: '64GB',
  selectedDeviceIdx: 0
};

describe('phonePicker reducer', () => {
  it('should handle initial state', () => {
    expect(phonePicker(undefined, {})).toEqual(initialState);
  });

  it('should handle LOAD', () => {
    const action = {
      type: types.LOAD
    };

    const expected = {
      ...initialState,
      loading: true
    };

    const result = phonePicker(initialState, action);
    expect(result).toEqual(expected);
  });

  it('should handle LOAD_SUCCESS', () => {
    const action = {
      type: types.LOAD_SUCCESS,
      phones
    };

    const state = {
      ...initialState,
      loading: true
    };

    const expected = {
      ...initialState,
      loading: false,
      phone: phones[0],
      selectedDeviceIdx: 0,
      colourHex: '#f8e7dc',
      memory: '64GB'
    };

    const result = phonePicker(state, action);
    expect(result).toEqual(expected);
  });

  it('should handle LOAD_FAIL', () => {
    const action = {
      type: types.LOAD_FAIL
    };

    const state = {
      ...initialState,
      loading: true
    };

    const expected = {
      ...initialState,
      loading: false,
      loadFailed: true
    };

    const result = phonePicker(state, action);
    expect(result).toEqual(expected);
  });

  it('should handle SET_COLOUR', () => {
    const action = {
      type: types.SET_COLOUR,
      colour: '#e1e2e3'
    };

    const expected = {
      ...testState,
      colourHex: '#e1e2e3',
      selectedDeviceIdx: 1
    };

    const result = phonePicker(testState, action);
    expect(result).toEqual(expected);
  });

  it('should handle SET_MEMORY', () => {
    const action = {
      type: types.SET_MEMORY,
      memory: '256GB'
    };

    const expected = {
      ...testState,
      memory: '256GB',
      selectedDeviceIdx: 3
    };

    const result = phonePicker(testState, action);
    expect(result).toEqual(expected);
  });
});
