import {createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk';

declare let window: any;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState:any) => createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
);

export default configureStore
