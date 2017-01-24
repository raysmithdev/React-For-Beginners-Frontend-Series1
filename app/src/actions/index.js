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

export const savePost = (postName) => {
  return dispatch => {
    return fetch('http://localhost:8080/todo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              postName
            })
          })
          .then(response => response.json())
          .then(data => dispatch(receivePosts(data)))
  }
}

export const deletePost = (id) => {
  return dispatch => {
    return fetch('http://localhost:8080/todo', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id
            })
          })
          .then(response => response.json())
          .then(data => dispatch(receivePosts(data)))
  }
}
