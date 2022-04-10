import  { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { buyerReducer } from './buyer/buyer.reducer';
import { productReducer } from './product/product.reducer';
import { manufacturerReducer } from './manufacturer/manufacturer.reducer';
import { requestReducer } from './request/request.reducer';

export const store=createStore(
    combineReducers({
        buyer:buyerReducer,
        product:productReducer,
        manufacturer:manufacturerReducer,
        request:requestReducer,
    }),
    applyMiddleware(thunk)
);

