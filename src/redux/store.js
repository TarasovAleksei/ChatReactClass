import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
import { createBrowserHistory } from 'history';
import chatsReducer from './chats-reducer';
import profileReducer from './profile-reducer';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'geekmessenger',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [],
};

const reducers = combineReducers({
  router: connectRouter(history),
  messenger: chatsReducer,
  profile: profileReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistReducer(persistConfig, reducers),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);
export const persistor = persistStore(store);

export default store;
