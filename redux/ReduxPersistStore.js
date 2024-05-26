import storage from 'redux-persist/lib/storage' //local storage path
// import sessionstorage from 'redux-persist/lib/storage/session' //local storage path
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import shoppingCartReducerslice from './shoppingCartReducer'

const configuration = {
    key : "globalStorage" ,
    storage 
}


const rootReducer = combineReducers({
    shoppingcard: shoppingCartReducerslice
})


const persistableReducer = persistReducer(configuration , rootReducer)

export const ReduxPersistStore = configureStore ({
    reducer : persistableReducer
})

export const persistor = persistStore(ReduxPersistStore)

