import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { path } from 'ramda';

import rootReducer from 'store/reducers';

const devCompose = path(['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'], window);

const composeEnhancers = devCompose || compose;

const middleware = [
    thunk,
];

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default store;
