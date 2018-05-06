import { GET_USER_ID, GET_ERROR, GET_TASKS, GET_TASK, REPLACE_TASK, SET_TASK  } from "../constants/Task";

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

export function replaceTask(replacedTask) {
    return(dispatch) => {
        dispatch({
            type: REPLACE_TASK,
            payload: replacedTask
        })
    }
}

export function setTask(taskData) {
    return(dispatch) => {
        dispatch({
            type: SET_TASK,
            payload: taskData
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