import React from 'react'
import { PageHeader } from 'react-bootstrap'

const HeaderView = ({ username, userLocation }) => {
  return (
    <PageHeader>
       Hello {username}. You are in {userLocation}
    </PageHeader>
  )
}

export default HeaderView
