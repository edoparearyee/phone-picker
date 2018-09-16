import * as actionTypes from '../actions/types';
import phones from '../phones.json';

const phone = phones[0];

export const initialState = {
  colourHex: phone.deviceSummary[0].colourHex,
  memory: phone.deviceSummary[0].memory,
  phone,
  selectedDeviceIdx: 0
};

const newState = state => ({
  ...state,
  selectedDeviceIdx: state.phone.deviceSummary.findIndex(
    device =>
      device.memory === state.memory && device.colourHex === state.colourHex
  )
});

export default function phonePicker(state = initialState, action) {
  switch (action.type) {
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
