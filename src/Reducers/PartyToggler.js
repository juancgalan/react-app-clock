const PartyToggler = (state = {party: false}, action)  => {
  switch (action.type) {
    case 'TOGGLE_PARTY':
      return { party: !state.party }
    default:
      return state
  }
}

export default PartyToggler