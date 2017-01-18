const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          name: action.name
        }
      ]

    default:
      return state
  }
}

export default todos
