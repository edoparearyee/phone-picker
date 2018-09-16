import { createSelector } from 'reselect';

const getPhonePicker = state => state.phonePicker;

export const getSelectedMemory = createSelector(
  [getPhonePicker],
  phonePicker => phonePicker.memory
);

export const getSelectedColour = createSelector(
  [getPhonePicker],
  phonePicker => phonePicker.colourHex
);

export const getPhone = createSelector(
  [getPhonePicker],
  phonePicker => phonePicker.phone
);

export const getSelectedDevice = createSelector(
  [getPhonePicker],
  phonePicker => phonePicker.phone.deviceSummary[phonePicker.selectedDeviceIdx]
);

export const getColourOptions = createSelector(
  [getPhonePicker],
  phonePicker => [
    ...new Set(
      phonePicker.phone.deviceSummary.map(({ colourHex }) => colourHex)
    )
  ]
);

export const getMemoryOptions = createSelector(
  [getPhonePicker],
  phonePicker => [
    ...new Set(phonePicker.phone.deviceSummary.map(({ memory }) => memory))
  ]
);
