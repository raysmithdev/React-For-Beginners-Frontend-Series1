import React from 'react'
import { PageHeader } from 'react-bootstrap'

const Header = ({ items }) => {
  return (
    <PageHeader>
       {items.length < 1 ? <p>No items added yet</p> : <p>{items.length} items</p> }
    </PageHeader>
  )
}

export default Header
