const requestPosts = () => {
  return {
    type: 'REQUEST_POSTS'
  }
}

const receivePosts = (todos) => {
  return {
    type: 'RECEIVE_POSTS',
    todos
  }
}

export const fetchPosts = () => {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(`http://localhost:8080/todo`)
      .then(response => response.json())
      .then(data => dispatch(receivePosts(data)))
  }
}
