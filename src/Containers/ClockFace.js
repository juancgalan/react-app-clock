import { connect } from 'react-redux';
import Clock from '../Components/Clock'

const mapStateToProps = state => ({
  clockTick: state.ClockTick,
})

export default connect(
  mapStateToProps
)(Clock)