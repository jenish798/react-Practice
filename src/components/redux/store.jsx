import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import postsReducer from './reducer'
import thunkMiddleware from 'redux-thunk';
const composedEnhancer =composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore({
        reducer: rootReducer,
        composedEnhancer
    }
);

export default store;