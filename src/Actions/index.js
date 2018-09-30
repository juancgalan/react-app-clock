let timer = null;

/**
 * Timer based on:
 * https://medium.com/@machadogj/timers-in-react-with-redux-apps-9a5a722162e8
 */

export const start = (dispatch) => {
  clearInterval(timer);
  console.log('starting');
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch({ type: 'TIMER_START' });
  dispatch(tick());
}

export const setWakeUp = time => ({
  type: 'SET_WAKEUP',
  time
})

export const setLunch = time => ({
  type: 'SET_LUNCH',
  time
})

export const setNap = time => ({
  type: 'SET_NAP',
  time
})

export const toggleParty = party => ({
  type: 'TOGGLE_PARTY',
})

export const tick = () => ({ type: 'TIMER_TICK' });