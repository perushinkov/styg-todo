import types from "store/actions/types";
import { getLastListId } from "store/getters/board/lists";
import { addIncrementedId } from 'utils/redux';

export const addList = list => (dispatch, getState) => {
    const lastId = getLastListId(getState());
    
    return dispatch({
        type: types.LIST_ADD,
        payload: addIncrementedId(list, lastId),
    });
}
