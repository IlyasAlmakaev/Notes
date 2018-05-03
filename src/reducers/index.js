import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { user } from './user';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    user
});