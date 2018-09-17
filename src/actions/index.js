import * as types from './types';

export const load = () => ({ type: types.LOAD });
export const loadSuccess = phones => ({ type: types.LOAD_SUCCESS, phones });
export const loadFail = () => ({ type: types.LOAD_FAIL });
export const setColour = colour => ({ type: types.SET_COLOUR, colour });
export const setMemory = memory => ({ type: types.SET_MEMORY, memory });
