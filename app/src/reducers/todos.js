const todos = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return [
        ...action.todos
      ]

    default:
      return state
  }
}

export default todos
