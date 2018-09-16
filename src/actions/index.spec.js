import * as actions from './index';
import * as types from './types';

describe('phone picker actions', () => {
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
