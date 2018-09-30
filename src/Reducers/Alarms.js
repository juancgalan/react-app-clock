const Alarms = (state = {wakeUpTimer: 0, lunchTimer: 0, napTimer: 0}, action)  => {
  switch (action.type) {
    case 'SET_WAKEUP':
      return {
        ...state,
        wakeUpTimer: Number(action.time)
      }

      
    case 'SET_LUNCH':
      return {
        ...state,
        napTimer: Number(action.time)
      }
    case 'SET_NAP':
      return {
        ...state,
          napTimer: Number(action.time),
        }
    default:
      return state
  }
}

export default Alarms