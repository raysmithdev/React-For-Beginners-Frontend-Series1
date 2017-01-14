import React from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

const AddItem = ({ addItem }) => {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        let userInput = e.target.userInput.value
        addItem(userInput)
        e.target.userInput.value = ''
      }}
      inline
    >
    <FormGroup>
      <FormControl type="text" placeholder="Enter an item" name="userInput" />
    </FormGroup>
    <Button type="submit">
      Add Item
    </Button>
  </Form>
  );
}

export default AddItem
