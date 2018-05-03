import { request } from "./ModuleHttp";

export function itemsFetchingData(url, user) {
    return (dispatch) => {
        request(url, JSON.stringify(user)).then((res) => {
			if (res.status !== 200 && !res.ok) {
                throw Error(res.statusText);
            } 
				
			return res;
        })
        .then((res) => res.json())
        .then((items) => dispatch({ type: 'GET_USER_DATA', payload: items }))
        .catch((error) => dispatch({ type: 'GET_ERROR', payload: error.message }));
    }
}