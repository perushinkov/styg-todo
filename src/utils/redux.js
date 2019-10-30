import * as R from 'ramda';

export const createReducer = (actionHandlers, initialState) => (state = initialState, action) => R.propOr(
    R.identity,
    R.prop('type', action),
    actionHandlers
)(state, action);

export const createSimpleAction = R.curry((type, payload, dispatch) => dispatch({
    type,
    payload,
}));

export const addIncrementedId = (item, lastId) => {
    return R.assoc('id', R.inc(lastId), item);
}