import { v4 as uuidv4} from 'uuid';

const INITIAL_STATE = [{id: uuidv4(), todo: 'Wash clothes'}];

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return ([...state, action.payload])
        case 'REMOVE_TODO':
            return ([(state.filter(todo => todo.id !== action.payload))])
        default:
            return state;
    }
}

export default rootReducer;