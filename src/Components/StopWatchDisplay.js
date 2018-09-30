import React from 'react'

const noon = 12;
const evening = 18;

const setMessage = (timers, currentTime, party) => {
  console.log(party)
  if (party.party)
    return 'PARTEEEEEE!!!'
  else if (currentTime.hours >= timers.wakeUpTimer && currentTime.hours <= timers.wakeUpTimer + 1)
    return 'Time to Wake Up!!'
  else if (currentTime.hours >= timers.lunchTimer && currentTime.hours <= timers.lunchTimer + 1)
    return "It's time to eat!!"
  else if (currentTime.hours >= timers.napTimer && currentTime.hours <= timers.napTimer + 1)
    return 'Power Nap Time!!'
  else if (currentTime.hours <= noon)
    return 'Good morning to ya!'
  else if (currentTime.hours >= evening)
    return 'Good evening, mate!'
  else
    return 'Good afternoon!!'
     
}

const StopWatchDisplay = ({ timers, currentTime, party }) => (
  <h4>{ setMessage(timers, currentTime, party) }</h4>
)

export default StopWatchDisplay