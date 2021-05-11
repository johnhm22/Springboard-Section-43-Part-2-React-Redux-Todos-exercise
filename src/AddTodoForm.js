import React, { useState } from 'react';
import {
    Button,
    Form, FormGroup, Label, Input, Container, Row, Col
  } from "reactstrap";
// import './Companies.css';



const AddTodoForm = ({addTodo}) => {

    const initialState = {
        todo: ""
    }
    const [formData, setFormData] = useState(initialState);

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formdata => ({
        ...formdata,
        [name]: value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();
    const {todo} = formData;
    addTodo(todo);
    setFormData(initialState);
}

return (
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <Form method="get" onSubmit={handleSubmit} className="mt-5">
        <h3>Enter a new todo</h3>
            <FormGroup>
            <Label htmlFor="todo" className="float-left"></Label>
            <Input type="text" name="todo" id="todo" value={formData.todo} onChange={handleChange} placeholder="Enter todo..." />
            </FormGroup>
            <Button color="primary" size="sm" className="float-right">Add todo</Button>
        </Form>
       
        </div>
    )
  
};



export default AddTodoForm;