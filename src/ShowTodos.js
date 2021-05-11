import { useSelector, useDispatch } from 'react-redux';
import {Container, Row, Col, Button} from 'reactstrap';
import { v4 as uuidv4} from 'uuid';
import AddTodoForm from './AddTodoForm';
import './ShowTodos.css';

const ShowTodos = () => {
    const dispatch = useDispatch();
    const todo = useSelector(store => [...store]);
    console.log("todos in store are: ", todo);

    const addTodo = (todo) => {
        console.log("new todo from form is: ", todo);
        dispatch({ type: 'ADD_TODO', payload:{id: uuidv4(), todo} })
    }

    const removeTodo = (id) => {
        console.log("todo id to remove: ", id);
        dispatch({type: 'REMOVE_TODO', payload: {id}})
        console.log("todos in store after removal: ", todo)
    }

    return (
        <>
            <Container>
            <Row>
            {todo.map(t => (
            <Col xs="3">
            <ul>
            <li id='todo' className='m-0'>{t.todo}</li><Button onClick={() => removeTodo(t.id)}>X</Button>
            </ul>
            </Col>
            ))}
            </Row>
            <AddTodoForm addTodo = {addTodo}/>
            </Container>

        </>
    )
}

export default ShowTodos;