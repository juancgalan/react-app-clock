import React from 'react';

const Clock = () => {

  let test = new Date().getTime();
  setInterval(
    () => { test = new Date().getTime(); this.setState(); }, 100);

  return (
    <div className="clockPanel">
      <h4>
        I CAN HAZ TIME??
        <br/>
        <span id="clock">time: {test}</span>
      </h4>
    </div>
  );
};

export default Clock;