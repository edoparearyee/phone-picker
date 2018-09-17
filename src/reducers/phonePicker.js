import * as actionTypes from '../actions/types';

export const initialState = {
  colour: null,
  memory: null,
  phone: null,
  selectedDeviceIdx: null,
  loading: true,
  loadFailed: false
};

/**
 * Returns a new state with updated `selectedDevice`
 * @param {*} state
 */
const newState = state => ({
  ...state,
  selectedDeviceIdx: setDevice(state)
});

/**
 * Set the selected device based on the selected colour and
 * memory options
 *
 * @param {*} state
 */
const setDevice = state =>
  state.phone && state.memory && state.colour
    ? state.phone.deviceSummary.findIndex(
        device =>
          device.memory === state.memory &&
          device.colourHex === state.colour.colourHex
      )
    : null;

export default function phonePicker(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD: {
      return newState({
        ...state,
        loading: true
      });
    }

    case actionTypes.LOAD_SUCCESS: {
      const phone = action.phones[0];
      const device = phone.deviceSummary[0];
      return newState({
        ...state,
        phone,
        colour: {
          colourHex: device.colourHex,
          colourName: device.colourName
        },
        memory: device.memory,
        selectedDeviceIdx: 0,
        loading: false
      });
    }

    case actionTypes.LOAD_FAIL: {
      return newState({
        ...state,
        loading: false,
        loadFailed: true
      });
    }

    case actionTypes.SET_COLOUR: {
      return newState({
        ...state,
        colour: action.colour
      });
    }

    case actionTypes.SET_MEMORY: {
      return newState({
        ...state,
        memory: action.memory
      });
    }

    default: {
      return state;
    }
  }
}
