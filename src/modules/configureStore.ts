import { applyMiddleware, createStore } from 'redux';
import rootReducer, { RootState } from 'modules/reducer';

import thunk from 'redux-thunk';

const configureStore = (initialState?: RootState) => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );

    return store;
};

export default configureStore;
