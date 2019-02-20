import { createStore, applyMiddleware } from 'redux';

const middleware = [];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createAppropriateStore(() => {}, applyMiddleware(...middleware));

export default store;
