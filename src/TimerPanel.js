import React from 'react';

const TimePanel = () => {
  return (
    <div classname="timePanel">
      "Set Wake Up Time"
      <select id="wakeupTimeSelector">
      </select>
      <br/>
      "Set Lunch Time"
      <select id="lunchTimeSelector">
      </select>
      <br/>
      "Set Nap Time"
      <select id="napTimeSelector">
      </select>
    </div>
  );
};

export default TimePanel;