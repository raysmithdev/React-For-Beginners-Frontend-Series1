import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const List = ({ items }) => {
  return (
    <ListGroup>
      {items.map((item, index) => {
        return <ListGroupItem key={index}>{item.name}</ListGroupItem>
      })}
    </ListGroup>
  )
}

export default List
