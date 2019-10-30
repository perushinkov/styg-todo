import types from "store/actions/types";
import { addIncrementedId } from "utils/redux";
import { getLastCardId } from "store/getters/board/cards";

export const addCard = payload => (dispatch, getState) => {
    const lastId = getLastCardId(getState());
    
    return dispatch({
        type: types.CARD_ADD,
        payload: {
            ...payload,
            card: addIncrementedId(payload.card, lastId),
        },
    });
}
