import * as actions from './index';
import * as types from './types';
import phones from '../phones.json';

describe('phonePicker actions', () => {
  it('load should create LOAD action', () => {
    expect(actions.load()).toEqual({
      type: types.LOAD
    });
  });

  it('loadSuccess should create LOAD_SUCCESS action', () => {
    expect(actions.loadSuccess(phones)).toEqual({
      type: types.LOAD_SUCCESS,
      phones
    });
  });

  it('loadSuccess should create LOAD_FAIL action', () => {
    expect(actions.loadFail()).toEqual({
      type: types.LOAD_FAIL
    });
  });

  it('setColour should create SET_COLOUR action', () => {
    expect(actions.setColour('#f8e7dc')).toEqual({
      type: types.SET_COLOUR,
      colour: '#f8e7dc'
    });
  });

  it('setMemory should create SET_MEMORY action', () => {
    expect(actions.setMemory('64GB')).toEqual({
      type: types.SET_MEMORY,
      memory: '64GB'
    });
  });
});
