import { combineReducers } from 'redux';
import ClockTick from './ClockTick';
import Alarms from './Alarms'
import PartyToggler from './PartyToggler'

export default combineReducers({
  Alarms,
  ClockTick,
  PartyToggler,
});