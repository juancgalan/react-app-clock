import React from 'react';
import './Clock.sass';
import clockFace from './clockface.png'

let bkStyle = {
  backgroundImage: `url(${clockFace})`,
  backgroundSize: `contain`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}

const Clock = ({ clockTick }) =>  (
    <div className="clockPanel">
      <h4>
        I CAN HAZ TIME??
        <br/>
        <div id="clockGraph">
          <div id="clockHandsGroup" style={bkStyle}>
            <svg id="clockHands" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300">
              <g id="handleLayer">
                <g id="hour">
                  <rect id="handle" x="95" y="40.5" width="10" height="120" style={clockTick.hourStyle}/>
                </g>
                <g id="minute">
                  <rect id="handle" x="97.5" y="20" width="5" height="167" style={clockTick.minutesStyle}/>
                </g>
                <g id="second">
                  <polygon id="handle" points="102.5 198 100 0 97.5 198 102.5 198" style={clockTick.secondsStyle}/>
                </g>
                <g id="center">
                  <circle id="back"   cx="100" cy="140" r="9"/>
                  <circle id="back-2" cx="100" cy="140" r="7"/>
                  <circle id="back-3" cx="100" cy="140" r="3"/>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </h4>
    </div>
);

export default Clock;