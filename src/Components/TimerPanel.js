import React from 'react';
import StopWatchMessage from '../Containers/StopWatchMessage'
import PartyButtonDisplay from '../Containers/PartyButtonDisplay'

const TimerOption = (from, fMeridian, tMeridian = fMeridian) => (
  <option key={from} value={from}>{1 + from % 12} {fMeridian} - {1 + (from + 1) % 12} {tMeridian} </option>
)

const timeOption = () => {
  let options = []
  options.push(TimerOption(23, 'AM', 'AM'))
  for (let i = 0; i < 10; i++) {
    options.push(TimerOption(i, 'AM'))
  }
  options.push(TimerOption(10, 'AM', 'PM'))
  options.push(TimerOption(11, 'PM', 'PM'))
  for (let i = 0; i < 10; i++) {
    options.push(TimerOption(i + 12, 'PM'))
  }
  options.push(TimerOption(22, 'PM', 'AM'))
  return options
}

const TimerPanel = ({ onChange, timers }) => (
    <div className="timePanel">
      <StopWatchMessage />
      "Set Wake Up Time"
      <select id="wakeupTimeSelector" onChange={ onChange.wakeUpOnChange } value="6">
        { timeOption() }
      </select>
      <br/>
      "Set Lunch Time"
      <select id="lunchTimeSelector"onChange={ onChange.lunchOnChange } value="12">
        { timeOption() }
      </select>
      <br/>
      "Set Nap Time"
      <select id="napTimeSelector"onChange={ onChange.napOnChange } value="14">
        { timeOption() }
      </select>
      <br/>
      <PartyButtonDisplay />
    </div>
)

export default TimerPanel;