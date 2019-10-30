import { combineReducers } from "redux";

import lists from 'store/reducers/board/lists';
import cards from 'store/reducers/board/cards';

export default combineReducers({
    lists,
    cards,
});
