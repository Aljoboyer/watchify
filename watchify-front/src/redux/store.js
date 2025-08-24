import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {api} from './api/api';
import {persistReducer, persistStore, } from 'redux-persist';
import localforage from 'localforage';
import { rootReducer } from './rootReducers';

const persistConfig={
  key: 'persist-store', 
  storage: localforage,
  blacklist: ['api'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),

})

setupListeners(store.dispatch)

export const persistor = persistStore(store);