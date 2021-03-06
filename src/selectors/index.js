import { createSelector } from 'reselect';

const getPhonePicker = state => state.phonePicker;

export const getLoading = createSelector(
  [getPhonePicker],
  phonePicker => phonePicker.loading
);

export const getPhone = createSelector(
  [getPhonePicker],
  phonePicker => phonePicker.phone
);

export const getColour = createSelector(
  [getPhonePicker],
  phonePicker => phonePicker.colour
);

export const getSelectedDevice = createSelector(
  [getPhonePicker],
  phonePicker =>
    phonePicker.phone
      ? phonePicker.phone.deviceSummary[phonePicker.selectedDeviceIdx]
      : null
);

export const getLoadFailed = createSelector(
  [getPhonePicker],
  phonePicker => phonePicker.loadFailed
);

export const getMemory = createSelector(
  [getPhonePicker],
  phonePicker => phonePicker.memory
);

/**
 * Build a list of colour options by getting a list of
 * unique colour values from `deviceSummary` array
 */
export const getColourOptions = createSelector(
  [getPhonePicker],
  phonePicker =>
    phonePicker.phone
      ? [
          ...new Set(
            phonePicker.phone.deviceSummary.map(({ colourHex, colourName }) =>
              JSON.stringify({ colourHex, colourName })
            )
          )
        ].map(colour => JSON.parse(colour))
      : []
);

/**
 * Build a list of memory options by getting a list of
 * unique colour values from `deviceSummary` array
 */
export const getMemoryOptions = createSelector(
  [getPhonePicker],
  phonePicker =>
    phonePicker.phone
      ? [
          ...new Set(
            phonePicker.phone.deviceSummary.map(({ memory }) => memory)
          )
        ]
      : []
);
