import { GET_ITEMS, ADD_ITEM, DELETE_ITEM} from './types';

export const getItemsAct = () => {
    return {
        type: GET_ITEMS
    };
}

export const addItemAct = () => {
    return {
        type: ADD_ITEM
    };
}

export const deleteItemAct = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
}