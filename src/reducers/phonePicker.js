import * as actionTypes from '../actions/types';

export const initialState = {
  colourHex: null,
  memory: null,
  phone: null,
  selectedDeviceIdx: null,
  loading: true,
  loadFailed: false
};

const newState = state => ({
  ...state,
  selectedDeviceIdx:
    state.phone && state.memory && state.colourHex
      ? state.phone.deviceSummary.findIndex(
          device =>
            device.memory === state.memory &&
            device.colourHex === state.colourHex
        )
      : 0
});

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
        colourHex: device.colourHex,
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
        colourHex: action.colour
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
