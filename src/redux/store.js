//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import productSaga from './productSaga'
import createSagaMiddleware from '@redux-saga/core';


//const store = createStore(rootReducer);
const SagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:rootReducer,
    middleware:() => [SagaMiddleware]
});

SagaMiddleware.run(productSaga);

export default store;





