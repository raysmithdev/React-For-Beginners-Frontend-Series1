import React from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

const AddItemView = ({ addItem }) => {
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault()
        let userInput = event.target.userInput.value
        addItem(userInput)
        event.target.userInput.value = ''
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

export default AddItemView
