import React from 'react'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'

const ListView = ({ todos, deletePost }) => {
  return (
    <ListGroup>
      {todos.map((todo, index) => {
        return (
          <ListGroupItem key={index}>
            {todo.text}
              <Button onClick={() => deletePost(todo._id)} bsStyle="danger">DELETE</Button>
          </ListGroupItem>
        )
      })}
    </ListGroup>
  )
}

export default ListView
