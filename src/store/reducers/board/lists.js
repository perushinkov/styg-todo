import * as R from 'ramda';

import { createReducer } from 'utils/redux';
import types from 'store/actions/types';

const initialState = {
    lastId: 0,
    items: [],
};

const actionHandlers = {
    [types.LIST_ADD]: (state, { payload }) => R.evolve(
        {
            lastId: () => R.prop('id', payload),
            items: R.append(payload),
        },
        state
    ),

    [types.CARD_ADD]: (state, { payload: { listId, card } }) => {
        const updateCards = R.evolve({ cards: R.append(card.id) });
        const updateLists = R.map(R.when(R.propEq('id', listId), updateCards));

        return R.evolve({ items: updateLists }, state);
    },
};

export default createReducer(actionHandlers, initialState);
