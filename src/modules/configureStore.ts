import { applyMiddleware, createStore } from 'redux';
import rootReducer, { RootState } from 'modules/reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = (initialState?: RootState) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(logger, thunk))
    );

    return store;
};

export default configureStore;
