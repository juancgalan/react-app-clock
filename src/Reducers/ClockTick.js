const noon = 12;

const displayDate = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let meridian = 'AM';

  if (hours >= noon) {
    meridian = 'PM';
    hours = hours - 12;
  }

  if (hours < 12) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
}

const ClockTick = (state = displayDate(new Date()), action)  => {
  switch (action.type) {
    case 'TIMER_TICK':
      return displayDate(new Date());
    default:
      return state;
  }
}

export default ClockTick;