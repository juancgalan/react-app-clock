import { connect } from  'react-redux'
import PartyButton from '../Components/PartyButton'
import { toggleParty } from '../Actions'


const mapStateProps = () => ({})

const mapDispatchProps = dispatch => ({
  onClick: () => dispatch(toggleParty())
})

export default connect(
  mapStateProps,
  mapDispatchProps,
)(PartyButton)