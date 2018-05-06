import { GET_USER_ID, GET_ERROR, GET_TASKS, GET_TASK, API_DELETE_TASK  } from "../constants/Task";

export function getID(id) {
    return(dispatch) => {
        dispatch({
            type: GET_USER_ID,
            payload: id
        })
    }
}

export function getTasks(tasks) {
    return(dispatch) => {
        dispatch({
            type: GET_TASKS,
            payload: tasks
        })
    }
}

export function addTask(task) {
    return(dispatch) => {
        dispatch({
            type: GET_TASK,
            payload: task
        })
    }
}

export function deleteTask(deletedTask) {
    return(dispatch) => {
        dispatch({
            type: DELETE_TASK,
            payload: deletedTask
        })
    }
}

export function getError(error) {
    return(dispatch) => {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }
}