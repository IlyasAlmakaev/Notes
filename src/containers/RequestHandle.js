import { request } from "./ModuleHttp";
import { GET_USER_DATA, GET_ERROR } from "../constants/User";
import { GET_TASK_DATA } from "../constants/Task";

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

export function authorizeRequest(url, user) {
    return itemsFetchingData(url, user, GET_USER_DATA, 'post')
}

// export function getTasks(url, id) {
//     return itemsFetchingData(url, user, GET_TASK_DATA, 'post')
// }