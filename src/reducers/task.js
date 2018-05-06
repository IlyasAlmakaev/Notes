import { GET_USER_ID, GET_TASKS, GET_TASK, GET_ERROR, DELETE_TASK } from "../constants/Task";

const initialState = {
    id: '',
    tasks: {},
    task: {},
    deletedTask: {}, 
    error: ''
}

export function task(state = initialState, action) {

    switch(action.type) {
        case GET_USER_ID:
            return { ...state, id: action.payload } 
        case GET_TASKS:
            return { ...state, tasks: action.payload }
        case GET_TASK:
            return { ...state, task: action.payload }
        case DELETE_TASK:
            return { ...state, deletedTask: action.payload }       
        case GET_ERROR:
            return { ...state, error: action.payload }     
        
        default:
            return state;
    }
}