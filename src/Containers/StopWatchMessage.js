import { connect } from 'react-redux'
import StopWatchDisplay from '../Components/StopWatchDisplay'

const mapStateProps = state => ({
  currentTime: state.ClockTick,
  timers: state.Alarms,
  party: state.PartyToggler,
})

export default connect(
  mapStateProps
)(StopWatchDisplay)
