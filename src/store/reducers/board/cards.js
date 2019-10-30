import * as R from 'ramda';

import { createReducer } from 'utils/redux';
import types from 'store/actions/types';

const initialState = {
    lastId: 0,
    items: [],
};

const actionHandlers = {
    [types.CARD_ADD]: (state, { payload }) => R.evolve(
        {
            lastId: () => R.path(['card', 'id'], payload),
            items: R.append(R.prop('card', payload))
        },
        state
    ),
};

export default createReducer(actionHandlers, initialState);
