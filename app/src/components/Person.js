import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const Person = (props) => {
  console.log('Person:', props.person);
  return (
    <ListGroup>
      <ListGroupItem>
        {props.person.name}
      </ListGroupItem>
    </ListGroup>
  )
}

export default Person
