const initialState = {
    data: [],
    error: ''
}

export function user(state = initialState, action) {

    switch(action.type) {
        case 'GET_USER_DATA':
            return { ...state, data: action.payload } 
        case 'GET_ERROR':
            return { ...state, error: action.payload }     
        
        default:
            return state;
    }
}