import { GET_USER_ID, GET_ERROR } from "../constants/Task";

const initialState = {
    id: null,
    error: ''
}

export function task(state = initialState, action) {

    switch(action.type) {
        case GET_USER_ID:
            return { ...state, id: action.payload } 
        case GET_ERROR:
            return { ...state, error: action.payload }     
        
        default:
            return state;
    }
}