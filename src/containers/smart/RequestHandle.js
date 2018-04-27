import { itemsIsLoading, itemsFetchDataSuccess, itemsHasErrored } from "../../actions/items";
import { request } from "./ModuleHttp";

export function itemsFetchingData(url, user) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        request(url, JSON.stringify(user)).then((res) => {
			if (res.status !== 200 && !res.ok) {
                throw Error(res.statusText);
            } 
            
            dispatch(itemsIsLoading(false));
				
			return res;
        })
        .then((res) => res.json())
        .then((items) => dispatch(itemsFetchDataSuccess(items)))
        .catch((error) => dispatch(itemsHasErrored(error)));
    }
}