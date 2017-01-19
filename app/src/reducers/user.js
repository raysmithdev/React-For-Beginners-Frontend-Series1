const user = (state = {
  name: 'Ray',
  location: 'Vancouver'
}, action) => {
  switch (action.type) {
    case '':
      return {}

    default:
      return state
  }
}

export default user
