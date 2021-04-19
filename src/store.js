import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {authReducer} from './Reducers/authReducer';
import thunk from 'redux-thunk';


var initialState = 0;

const Red = combineReducers({
    user : authReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Red, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;