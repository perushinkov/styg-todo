import * as R from 'ramda';

const basePath = ['board', 'cards'];
const prefixWithBase = R.concat(basePath);

export const getLastCardId = R.path(prefixWithBase(['lastId']));

export const getCards = R.path(prefixWithBase(['items']));

export const getCardById = R.curry((state, id) => R.find(
    R.propEq('id', id),
    getCards(state)
));

export const getCardsById = R.curry((state, ids) => R.filter(
    R.propSatisfies(R.includes(R.__, ids), 'id'),
    getCards(state)
));