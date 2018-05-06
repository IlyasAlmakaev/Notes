import { request, getRequest, postRequest } from "./ModuleHttp";
import { GET_USER_DATA, GET_ERROR } from "../constants/User";
import { GET_TASKS, GET_USER_ID, GET_TASK, API_GET_TASKS, API_ADD_TASK, API_DELETE_TASK, DELETE_TASK } from "../constants/Task";

export function itemsFetchingData(url, user, type, method) {
    return (dispatch) => {
        request(url, JSON.stringify(user), method).then((res) => {
			if (res.status !== 200 && !res.ok) {
                throw Error(res.statusText);
            } 
				
			return res;
        })
        .then((res) => res.json())
        .then((items) => dispatch({ type: type, payload: items }))
        .catch((error) => dispatch({ type: GET_ERROR, payload: error.message }));
    }
}

export function itemsFetchingDataFromGetRequest(url, type, method, id) {
    return (dispatch) => {
        getRequest(url, method, id).then((res) => {
			if (res.status !== 200 && !res.ok) {
                throw Error(res.statusText);
            } 
				
			return res;
        })
        .then((res) => res.json())
        .then((items) => dispatch({ type: type, payload: items }))
        .catch((error) => dispatch({ type: GET_ERROR, payload: error.message }));
    }
}

export function itemsFetchingDataFromPostRequest(url, type, method, id, data) {
    return (dispatch) => {
        postRequest(url, method, id, JSON.stringify(data)).then((res) => {
			if (res.status !== 200 && !res.ok) {
                throw Error(res.statusText);
            } 
				
			return res;
        })
        .then((res) => res.json())
        .then((items) => dispatch({ type: type, payload: items }))
        .catch((error) => dispatch({ type: GET_ERROR, payload: error.message }));
    }
}

export function authorizeRequest(url, user) {
    return itemsFetchingData(url, user, GET_USER_DATA, 'post')
}

export function setUserID(id) {
    return (dispatch) => {
        dispatch({ type: GET_USER_ID, payload: id })
    }
}

export function getTasks(id) {

    return itemsFetchingDataFromGetRequest(API_GET_TASKS, GET_TASKS, 'get', id)
}

export function addTask(id, data) {
    return itemsFetchingDataFromPostRequest(API_ADD_TASK, GET_TASK, 'post', id, data)
}

export function deleteTask(id, taskID) {
    let url = API_DELETE_TASK + '/' + taskID
    return itemsFetchingDataFromGetRequest(url, DELETE_TASK, 'delete', id)
} 