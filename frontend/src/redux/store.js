import { configureStore} from '@reduxjs/toolkit'
import { cartReducer } from "./cartSlice"
import productSlice from './productSlice'

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

//holds state of application
export const store = configureStore({
    reducer:{
        cart: persistedReducer,
        products:productSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

// export default store
export const persistor = persistStore(store)



