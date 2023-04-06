import React from 'react'
import {Form} from 'react-bootstrap'
export default function Input(props) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control 
        type={props.type} 
        placeholder={props.placeHolder}
        value={props.value}
        onChange={props.onChange}
         />
        <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
      </Form.Group>
    </div>
  );
}
