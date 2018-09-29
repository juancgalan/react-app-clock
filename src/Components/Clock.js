import React from 'react';
import './Clock.sass';

const Clock = ({ clockTick }) =>  (
    <div className="clockPanel">
      <h4>
        I CAN HAZ TIME??
        <br/>
        <span id="clock">{ clockTick }</span>
      </h4>
    </div>
);

export default Clock;