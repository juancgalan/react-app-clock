import { connect } from 'react-redux'
import { setWakeUp, setLunch, setNap } from '../Actions'
import TimerPanel from '../Components/TimerPanel'

const mapStateProps = state => ({
  timers: {
    wakeUpTimer: 0,
    lunchTimer: 0,
    napTimer: 0
  }
})

const mapDispatchProps = dispatch => ({
  onChange: {
    wakeUpOnChange: ({ target }) => dispatch(setWakeUp(target.value)), 
    lunchOnChange: ({ target }) => dispatch(setLunch(target.value)), 
    napOnChange: ({ target }) => dispatch(setNap(target.value)), 
  }
})

export default connect(
  mapStateProps,
  mapDispatchProps
)(TimerPanel)
