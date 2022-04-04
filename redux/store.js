import  { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { buyerReducer } from './buyer/buyer.reducer';

export const store=createStore(
    combineReducers({
        buyer:buyerReducer
    }),
    applyMiddleware(thunk)
);

