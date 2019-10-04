import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';

import { workerGetTableResults } from './sagas/table.sagas';
import { workerGetUser } from './sagas/user.sagas';
import tableReducer from './reducers/table.reducers';
import userReducer from './reducers/user.reducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  tableReducer: tableReducer,
  userReducer: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(workerGetTableResults);
sagaMiddleware.run(workerGetUser);
sagaMiddleware.run(rootSaga);

export default store;
