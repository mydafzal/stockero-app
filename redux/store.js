import  { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { buyerReducer } from './buyer/buyer.reducer';
import { productReducer } from './product/product.reducer';
import { manufacturerReducer } from './manufacturer/manufacturer.reducer';

export const store=createStore(
    combineReducers({
        buyer:buyerReducer,
        product:productReducer,
        manufacturer:manufacturerReducer,
    }),
    applyMiddleware(thunk)
);

