import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from '../components/main/Main';
import * as phonePickerActions from '../actions';
import {
  getMemoryOptions,
  getColourOptions,
  getLoading,
  getMemory,
  getSelectedDevice,
  getColourHex,
  getPhone,
  getLoadFailed
} from '../selectors';

const mapStateToProps = state => ({
  loading: getLoading(state),
  loadFailed: getLoadFailed(state),
  phone: getPhone(state),
  selectedColour: getColourHex(state),
  selectedMemory: getMemory(state),
  selectedDevice: getSelectedDevice(state),
  memoryOptions: getMemoryOptions(state),
  colourOptions: getColourOptions(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(phonePickerActions, dispatch),
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
