import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from '../components/main/Main';
import * as phonePickerActions from '../actions';
import {
  getSelectedColour,
  getSelectedMemory,
  getSelectedDevice,
  getMemoryOptions,
  getColourOptions,
  getPhone
} from '../selectors';

const mapStateToProps = state => ({
  phone: getPhone(state),
  selectedDevice: getSelectedDevice(state),
  selectedColour: getSelectedColour(state),
  selectedMemory: getSelectedMemory(state),
  memoryOptions: getMemoryOptions(state),
  colourOptions: getColourOptions(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(phonePickerActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
