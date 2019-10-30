import * as R from 'ramda';
import { getCardsById } from 'store/getters/board/cards';

const basePath = ['board', 'lists'];
const prefixWithBase = R.concat(basePath);

export const getLastListId = state => R.path(prefixWithBase(['lastId']), state);

export const getLists = state => R.pathOr([], prefixWithBase(['items']), state);

export const getListById = R.curry((state, id) => R.find(
    R.propEq('id', id),
    getLists(state)
));

export const getListCards = R.curry((state, id) => {
    const list = getListById(state, id);
    const cardIds = R.propOr([], ['cards'], list);
    return getCardsById(state, cardIds);
});
